import React from 'react';

import { Fade } 	from 'react-reveal';

const DropLine = (props) => { 

	const makeDropLine = () => {
		const dropline = 'drop  me  a  line'.split('');
		const letters = dropline.map((letter, i) => {
			return(
				<h1 className='drop-line'>{letter}</h1>
			)
		})
		return letters;
	};

	return(
		<div className='drop-line-container'>
			<h1>questions? feedbacks? proposals of marriage?</h1>
			<a href='javascript:;'>
				<Fade top cascade>
					<span className='drop-line-org' onClick={props.handleModal}>
						{makeDropLine()}
					</span>
				</Fade>
			</a>
		</div>
	)
}
export default DropLine;
