import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';

const Logo = () =>
{
	return(
			<div className='ma4 mt0'>
				<h1 id="header" className="f1 white">Weather Forecaster</h1>
				<Tilt id="Logo" className="Tilt br2 shadow-2" options={{max:25}} style={{height:150, width:150}}>
				<div className="Tilt-inner"><img src="https://www.freeiconspng.com/uploads/weather-icon-png-15.png" width="350" alt="Svg Icon Weather"/></div>
				</Tilt>
			</div>
		);
}

export default Logo;
		