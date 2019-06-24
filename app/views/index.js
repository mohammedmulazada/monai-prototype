import { spendable } from './components/spendable/spendable.js'
import { graphy,updateBar } from './components/graphy/graphy.js'
spendable( document.querySelector( '.spendables .spendable:last-of-type' ),1033,500,350 )
graphy( document.querySelector( '.graph' ) )

const ball_1 = document.querySelector( '.spendables .spendable:first-of-type' )
const ball_2 = document.querySelector( '.spendables .spendable:last-of-type' )

spendable( ball_1,1000,500 ) // Element,Total Value,New Value,Float value (not required)
spendable( ball_2,1500,1500,300 )

setTimeout(
	()=>{
		spendable( ball_2,1500,1000,300 )
		spendable( ball_1,1000,450 )
		updateBar( 5,2 )
	},
	2000
)

setTimeout(
	()=>{
		updateBar( 0,3,2 )
	},
	5000
)