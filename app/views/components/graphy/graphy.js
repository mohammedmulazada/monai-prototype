const graphy = graph=>{
	const graphY = graph.querySelector( '.graph__y' )
	const graphBars = graph.querySelector( '.graph__bars' )
	// const minVal = Number( graphY.getAttribute( 'data-min' ) )
	const maxVal = Number( graphY.getAttribute( 'data-max' ) )
	const stepVal = Number( graphY.getAttribute( 'data-step' ) )
	
	// Generate grid
	for ( let i = 0; i < ( maxVal/stepVal )+1; i++ ) {
		const newDiv = document.createElement( 'div' )

		newDiv.classList.add( 'grid__value' )
		newDiv.textContent = `€${i*stepVal}`
		newDiv.setAttribute( 'style',`height:${( stepVal/maxVal )*200}px` )   
		graphY.appendChild( newDiv )
	}
    
	for ( let i = 0; i < 7; i++ ) {
		const newBar = document.createElement( 'div' )

		if( i===0 ){
			const progress = document.createElement( 'div' )
            
			progress.classList.add( 'bar__progress' )
			newBar.appendChild( progress )
		} 

		newBar.setAttribute( 'style',`height:${ 40 * ( i < 4 ? 3 : 5 ) }px` )
        
		newBar.classList.add( 'bars__bar' )

		graphBars.appendChild( newBar )
	}
}

const updateBar = ( n,step,progValue )=>{
	const graph = document.querySelector( '.graph' )
	const graphBars = graph.querySelector( '.graph__bars' )
	const bars = graphBars.querySelectorAll( '.bars__bar' )

	bars[n].setAttribute( 'style',`height:${step * 40}px` )
	
	if( progValue ){
		bars[n].querySelector( '.bar__progress' ).setAttribute( 'style',`height:${progValue + 40}px;` )
	}

}	

export { graphy,updateBar  }