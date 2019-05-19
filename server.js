const env = require('dotenv').config()

const express = require("express")
const app = express()
const fs = require('fs')
const https = require('https')
const port = 443
const request = require('request')

app.set("view engine","ejs")

app.get('/', (req, res) => {
	res.redirect('https://auth-sandbox.connect.abnamro.com/as/authorization.oauth2?scope=psd2:account:balance:read+psd2:account:transaction:read+psd2:account:details:read&client_id=TPP_test&response_type=code&flow=code&redirect_uri=https://localhost/auth&bank=NLAA01&state=SilverAdministration-123')
})

app.get('/auth', (req, res) => {
	const { code } = req.query

	const options = {
		url: 'https://auth-sandbox.connect.abnamro.com:8443/as/token.oauth2',
		cert: fs.readFileSync('TPPCertificate.crt'),
		key: fs.readFileSync('TPPprivateKey.key'),
		method: "POST",
		strictSSL: false,
		form: {
			grant_type:'authorization_code',
			client_id: 'TPP_test',
			code,
			redirect_uri: 'https://localhost/auth'
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

app.get('/overview', (req, res) => {

	res.render('overview')
})

https.createServer({
	key: fs.readFileSync('TPPprivateKey.key'),
	cert: fs.readFileSync('TPPCertificate.crt')
  }, app).listen(port, () => {
	console.log(`Now listening on port ${port}`)
})
