import React from 'react';

import { Fade } from 'react-reveal';

const Bio = () => {
	return(
		<div className='bio'>
			<Fade clear>
				<p className='drop-cap-graf'>Howdy! My name's John Hardberger, and I'm writer, web developer, and all-around audio tinkerer. I'm originally from Texas, but for the last seven years I've hung my hat in Chicagoland, USA.
				</p>
			</Fade>
			<Fade clear>
				<p>As a writer, I tend to focus on Chicago's thriving music, comedy, and art scenes, but I've also been known to cover immigration, education and real estate, and to write the occasional review.
				The thread that I feel unites my work is a genuine interest the people who make Chicago tick. 
				I firmly believe that all of us have a story to tell, and that what might on the surface seem mundane can contain the seeds of the transcendent. SEE MY WRITING PORTFOLIO</p>
			</Fade>
			<Fade clear>	
				<p>My work as a developer is still, well, developing: I graduated from General Assembly's intensive Web Development Immersive in December, and am currently seeking opportunities to expand my portfolio and continue my education.
				While I'm quite confident on the back end, its front end, design-focused work that most excites my creative interests.
				To that end, I strive to craft beautiful, simple projects that stem from thoughtful consideration of the user. SEE MY DEV PORTFOLIO</p>
			</Fade>
			<div className='spacer' >
			</div>
		</div>
	)
}
export default Bio;
