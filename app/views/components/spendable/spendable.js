const
	spendable = ( el,total,newVal,floatVal )=>{
		const ratio = newVal/total
		const floatRatio = floatVal/total
		const bAmount = el.querySelector( '.ball__amount' )
		const bProgress = el.querySelector( '.ball__progress' )
		const sFloat = el.querySelector( '.spendable__float' )
		// const bBall = el.querySelector( '.spendable__ball' )

		bAmount.innerHTML = `€${newVal}`
		bProgress.setAttribute( 'style',`height:${ratio*100}%;` )
		sFloat.setAttribute( 'style',`transform:translateX(calc(1rem + 100%)) translateY(${( 1-floatRatio )*120/* should be bBall.clientHeight */}px)` )
		// Voor whatever reason leest het de height van bBall verkeerd uit
	}

export {spendable}