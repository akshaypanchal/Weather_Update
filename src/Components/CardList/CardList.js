import React from 'react';
import Card from '../Cards/Card';

const CardList = ({Weather_Info, city}) =>{

	//Accessing weather Information and pass to Card.js File using CardComponents variable
	const cardComponent = Weather_Info.map((data, i) => {
		return <Card key = {i}
				 city={city} 
				 date = {Weather_Info[i].dt_txt}
				 icon = {Weather_Info[i].weather[0].icon}
				 temeprature = {Weather_Info[i].main.temp} 
				/>

	})


	return(
			<div>
			     {cardComponent}
			</div>
		);
}


export default CardList;