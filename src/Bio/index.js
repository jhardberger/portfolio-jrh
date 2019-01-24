import React from 'react';

import { Fade } from 'react-reveal';
import { Icon } from 'semantic-ui-react';


const Bio = () => {
	return(
		<div className='bio-container'>
			<Fade clear cascade>
				<div className='intro'>
					<p className='drop-cap-graf'>Howdy! My name's John Hardberger, and I'm writer, web developer, and all-around audio tinkerer. I'm originally from Texas, but for the last seven years I've hung my hat in Chicagoland, USA.
					</p>
				</div>
				<div className='bio'>
					<div className='prof-pic-container'>
						<img src='/prof-pic.jpeg' className='prof-pic' />
					</div>
					<div className='paragraph-2'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum volutpat risus, ac fringilla ligula vulputate eu. Vivamus nec velit non nibh lobortis dapibus nec nec velit. Sed aliquam aliquam maximus. Curabitur dui felis, fringilla quis libero non, ullamcorper semper mi. Aenean tempus, sem vitae ullamcorper convallis, ante ex cursus dolor, non feugiat nisi neque vitae ex. Quisque in blandit velit. Vestibulum justo leo, facilisis in aliquet at, blandit sit amet ligula. Aenean ut libero finibus, imperdiet lectus nec, feugiat magna. Suspendisse congue ligula in ultrices auctor. Suspendisse magna est, interdum id diam id, congue porta nulla. Suspendisse elementum metus ut libero egestas, sit amet fermentum nibh varius. Nulla turpis nunc, maximus eu metus ac, euismod varius nibh. Sed sit amet massa tincidunt, iaculis leo at, elementum sapien. Morbi quis sagittis leo.</p>
					</div>
				</div>
				<div className='recent-work'>
					<h1>SCROLL for some recent work:</h1>
					<Icon size='large' name='chevron down' className='scroll-arrow' />			
				</div>	
			</Fade>
		</div>
	)
}
export default Bio;
