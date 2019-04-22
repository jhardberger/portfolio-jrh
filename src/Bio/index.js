import React from 'react';

import Skills from '../Skills/index';

import Waypoint from 'react-waypoint';
import { Fade } from 'react-reveal';

import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({offset: -60, scrollDuration: 200});

const Bio = (props) => {
	
	return(
		<div className='bio-container'>
			<Waypoint onEnter={props.handleHideScroll} />  
			<Fade clear cascade>
				<ScrollableAnchor id={'hi'}	>				
					<div className='intro'>	
						<p className='drop-cap-graf'>howdy! My name's John Hardberger. I'm front end web developer with a love of visual storytelling and clean, user-friendly design. I used to be a journalist, and many of the skills I picked up in that trade—communication, teamwork, and attention to detail—continue to inform my work. My primary mode of transportation is bicycle. I'm probably listening to music right now. I appreciate a good hot dog.</p>
					</div>
				</ScrollableAnchor>
				<Waypoint onEnter={props.handleHideName} />	
				<div className='bio'>
					<div className='prof-pic-container'>
						<img src='/prof-pic.jpeg' className='prof-pic' alt='a portrait of the author as a work in progress' />
						<Skills handleResume={props.handleResume} />
					</div>
					<div className='bio-copy'>
						<h1>about me</h1>
						<p> As a generally curious person with a wide range of interests, I struggled for a long time to find focus in my work life. I flirted with careers in graphic design, DJing, and podcasting before settling into a three-year editorial journey.
						</p>
						<p>These days, I'm making my home on the information highway—as a web developer with full stack chops and front end finesse, specializing in JavaScript and React. I've always been been fascinated by graphic and web design, and in December 2018, I decided to parlay that passion into a new career through General Assembly's intensive Web Development Immersive.  
						</p>
						<p>In ten weeks I went from knowing a few HTML tags to building full stack web apps from scratch. The course helped me approach programming on terms I could understand, while constantly challenging and encouraging me to put that understanding into practice. I'm extremely excited to test that growth, as well to continue my education as a coder, critical thinker, and creative problem solver.
						</p>
						<p>I’m currently seeking any work that will allow me to do just that. Below are some of the projects I developed while at General Assembly, some things I’ve worked in the time since graduation, and a few fun, non-dev passion projects. That includes this very website! It, like everything else here (including the guy in that picture over there), is a work in progress.
						</p> 
						<p>If you like what you see and are interested in getting in touch, <span onClick={props.handleModal}><a href='javascript:;'>please drop me a line here</a></span>. 
						</p>
					</div>
				</div>
			</Fade>
		</div>
	)
}
export default Bio;
