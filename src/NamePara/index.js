import React from 'react';

import { Parallax } from 'react-scroll-parallax';

const NamePara = () => { 
	const makeName = () => {
		const myName = 'j H'.split('');
		console.log(myName);
		const letters = myName.map((letter, i) => {
			console.log('say my name');
			return(
				<Parallax
					key={i}
					offsetXMax={100 * (i - 1)}
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