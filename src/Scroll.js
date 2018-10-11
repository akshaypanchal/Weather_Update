import React from 'react';

const Scroll = (props) => {
	return(
			<div style ={{ overflow: 'auto', marginTop:'10px' ,height:'800px'}}>
			{props.children}
			</div>
		);
}

export default Scroll;