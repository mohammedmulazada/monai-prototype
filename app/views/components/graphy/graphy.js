const graphy = ( graph,barN,newValue )=>{
	const graphY = graph.querySelector( '.graph__y' )
	const graphBars = graph.querySelector( '.graph__bars' )
	const minVal = Number( graphY.getAttribute( 'data-min' ) )
	const maxVal = Number( graphY.getAttribute( 'data-max' ) )
	const stepVal = Number( graphY.getAttribute( 'data-step' ) )
    
	for ( let i = 0; i < ( maxVal/stepVal )+1; i++ ) {
		const newDiv = document.createElement( 'div' )

		newDiv.classList.add( 'grid__value' )
		newDiv.textContent = `€${i*stepVal}`
		newDiv.setAttribute( 'style',`height:${( stepVal/maxVal )*200}px` )   
		graphY.appendChild( newDiv )
	}
    
	for ( let i = 0; i < 7; i++ ) {
		const newBar = document.createElement( 'div' )

		if( i==0 ){
			const progress = document.createElement( 'div' )
            
			progress.classList.add( 'bar__progress' )
			newBar.appendChild( progress )
		} else{
			newBar.setAttribute( 'style',`height:${( Math.floor( Math.random()*5 ) )*40}px` )
		}
        
		newBar.classList.add( 'bars__bar' )

		graphBars.appendChild( newBar )
	}
}

export {graphy}