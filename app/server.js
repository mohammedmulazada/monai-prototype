const express = require('express')
const ENV = require('dotenv').config({
	path: './config/.env'
}).parsed
const bodyParser = require('body-parser')
const url = require('url')
const app = express()
const fs = require('fs')
const session = require('express-session')
const PORT = ENV.NODE_ENV === 'production' ? ENV.PORT : ENV.DEV_PORT

const https = require('https')
const request = require('request')

const routes = {
	home: '/',
	auth: '/auth',
	overview: '/overview',
}

app.set('views', __dirname+'/views')
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.static('app/views'))
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: true }
  }))
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())

app.get('*', (req, res, next) => {

	const CSS_FILE = './public/styles/critical.css'
	fs.readFile(CSS_FILE, 'utf8', (err, data) => {
		if (err) {
			return console.log(err)
		}
		if (data) {
			app.locals.criticalCSS = data
		}

		next()
	})

	if (ENV.NODE_ENV !== 'production'){
		app.locals.environment = 'development'
	}

})


app.get(routes.home, (req, res) => {
	res.redirect('https://auth-sandbox.connect.abnamro.com/as/authorization.oauth2?scope=psd2:account:balance:read+psd2:account:transaction:read+psd2:account:details:read&client_id=TPP_test&response_type=code&flow=code&redirect_uri=https://localhost/auth&bank=NLAA01&state=SilverAdministration-123')
})

app.get(routes.auth, (req, res) => {
	const { code } = req.query

	const options = {
		url: 'https://auth-sandbox.connect.abnamro.com:8443/as/token.oauth2',
		cert: fs.readFileSync('TPPCertificate.crt'),
		key: fs.readFileSync('TPPprivateKey.key'),
		method: "POST",
		strictSSL: false,
		form: {
			grant_type:'authorization_code',
			client_id: ENV.CLIENTID,
			code,
			redirect_uri: url.resolve(ENV.DOMAIN, routes.auth)
		},
		headers: {
			'Cache-Control': 'no-cache',
			'Content-Type': 'application/x-www-form-urlencoded',
		}
	};
	
	request.post(options, (err, httpResponse, body) => {
		if (err) {
			return
		}
		const parsed = JSON.parse(body)
		const { access_token } = parsed
		console.log(body, access_token)

		if (access_token) {
			const options = {
				url: 'https://api-sandbox.abnamro.com/v1/consentinfo',
				method: "GET",
				strictSSL: false,
				headers: {
					'Accept': 'application/json',
					'API-Key': process.env.ABNAMROAPIKEY,
					'Authorization': `Bearer ${access_token}`
				}
			};

			request.get(options, (err, httpResponse, body) => {
				if (err) {
					return
				}
				const parsed = JSON.parse(body)
				console.log(parsed, 'parsed')
				const { iban } = parsed

				if (iban) {

					const details = {
						url: `https://api-sandbox.abnamro.com/v1/accounts/${iban}/details`,
						method: "GET",
						strictSSL: false,
						headers: {
							'API-Key': process.env.ABNAMROAPIKEY,
							'Authorization': `Bearer ${access_token}`
						}
					};
					console.log(body)

					request.get(details, (err, httpResponse, body) => {
						if (err) {
							return
						}

						const parsed = JSON.parse(body)
						console.log(parsed, 'details')
					})

					const transactions = {
						url: `https://api-sandbox.abnamro.com/v1/accounts/${iban}/transactions`,
						method: "GET",
						strictSSL: false,
						headers: {
							'API-Key': process.env.ABNAMROAPIKEY,
							'Authorization': `Bearer ${access_token}`
						}
					};
					console.log(body)

					request.get(transactions, (err, httpResponse, body) => {
						if (err) {
							return
						}

						const parsed = JSON.parse(body)
						app.locals.transactions = parsed.transactions
						// console.log(parsed.transactions)
					})

					const options = {
						url: `https://api-sandbox.abnamro.com/v1/accounts/${iban}/balances`,
						method: "GET",
						strictSSL: false,
						headers: {
							'API-Key': process.env.ABNAMROAPIKEY,
							'Authorization': `Bearer ${access_token}`
						}
					};

					request.get(options, (err, httpResponse, body) => {
						if (err) {
							return
						}      

						const parsed = JSON.parse(body)
						const { accountNumber, currency, amount } = parsed
						app.locals.accountDetails = { accountNumber, currency, amount }
						res.redirect('/overview')
					})
				}
			})
		}
	})
})

app.get('/poc', (req, res) => {
	res.render('poc')
})

app.get(routes.overview, (req, res) => {
	req.session.views = !req.session.views ? 1 : req.session.views + 1
	console.log(req.sessionID, req.session)
	res.render('overview')
})

https.createServer({
	key: fs.readFileSync('TPPprivateKey.key'),
	cert: fs.readFileSync('TPPCertificate.crt')
  }, app).listen(PORT, () => {
	console.log(`Now listening on port ${PORT}`)
})