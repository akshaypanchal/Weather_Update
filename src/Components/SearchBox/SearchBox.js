import React from 'react';

//for creating search field
const SearchBox = ({onChange}) => {

	return(
			<div className= "tc">
				<input 
					className="pa3 ba b--green bg-lightest-blue w20" 
					type='text' 
					placeholder="Search by City Name"
					name="city"
					id="searchField"
				 />
					<button className=' m-5 b w-10 grow pa3 ba cursor Black bg-lightest-blue shadow-3'
					 onClick={onChange}>Submit</button>
			</div>
		);
}

export default SearchBox;