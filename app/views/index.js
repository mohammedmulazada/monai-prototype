import { spendable } from './components/spendable/spendable.js'
import { graphy } from './components/graphy/graphy.js'
spendable( document.querySelector( '.spendables .spendable:last-of-type' ),1033,500,350 )
graphy( document.querySelector( '.graph' ) )

setInterval(
	()=>{
		spendable( document.querySelector( '.spendables .spendable:last-of-type' ),1033,Math.floor( Math.random()*1033 ),Math.floor( Math.random()*350 ) )
	}
	,1000
)