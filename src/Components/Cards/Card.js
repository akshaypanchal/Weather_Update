import React from 'react';

//Used for Creating Card with Weather Information
const Card = ({city,temeprature,date, icon}) =>{
	
		return (
				<div className = 'bg-light-green dib br3 grow ma2 pa3 bw2 shadow-5 w-15'>
					<h1>{temeprature}°c</h1>
					<img src={`http://openweathermap.org/img/w/${icon}.png`} 
						 width='100px'
						 height='auto'
						 alt="weather"/>
					<h2>{date}</h2>
					<h4>{city}</h4>
				</div> 
			

		);
	
}

export default Card;
