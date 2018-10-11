import React from 'react';

//for creating header 
const Header= ({city, country,avgPressure}) =>{
	
	if(city ){
		return (
				<div className = 'bg-light-green tc dib br3 grow ma2 pa3 bw2 shadow-5 w-30'>
					<h1>{city}</h1>
					<h3>{country}</h3>
					<h3>{avgPressure}</h3>
				</div> 
			

		);
	}
	else
	{
		return(
			<div></div>
			);
	}
	
}

export default Header;
