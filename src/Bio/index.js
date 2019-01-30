import React from 'react';

import { Fade } from 'react-reveal';
import Waypoint from 'react-waypoint';

const Bio = (props) => {
	
	return(
		<div className='bio-container'>
			<Waypoint onEnter={props.handleHideScroll} />  
			<Fade clear cascade>					
				<div className='intro'>	
					<p className='drop-cap-graf'>howdy! My name's John Hardberger. I'm writer, web developer, audio producer, and all-around tinkerer. I'm originally from Texas, but for the last seven years I've hung my hat in Chicagoland, USA.</p>
				<Waypoint onEnter={props.handleHideName} />	
				</div>
				<div className='bio'>
					<div className='prof-pic-container'>
						<img src='/prof-pic.jpeg' className='prof-pic' alt='a portrait of the author as young man' />
					</div>
					<div className='bio-copy'>
						<p>I've always enjoyed making things and have spent a good chunk of my adult life exploring different genres of thing to make, learning the necessary tools in the process. That passion for creation has been the driving force behind much of my personal growth. It lead me to the my three year editorial career, where I was lucky enough to write, report, fact-check, and edit stories for such stellar publications as Chicago magazine, Food Network magazine, the Chicago Tribune, and ApartmentTherapy.com. It lead me to many stints and side-gigs, in everything from DJing to graphic design.</p>

						<p>							
						</p>
					</div>
				</div>
			</Fade>
		</div>
	)
}
export default Bio;
