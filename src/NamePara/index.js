import React from 'react';

import { Parallax } from 'react-scroll-parallax';



const NamePara = () => { 
	const makeName = () => {
		const myName = 'JOHN HARDBERGER'.split('');
		console.log(myName);
		const letters = myName.map((letter, i) => {
			console.log('say my name');
			return(
				<Parallax
					key={i}
					offsetXMax={120 * (i - 3)}
				>
					<div>
						<h1 className='letter'>{letter}</h1>
					</div>
				</Parallax>
			)	
		})
		return letters;
	}
	return(
		<div className='name-parallax'>
			{makeName()}
		</div>
	)
};

export default NamePara;