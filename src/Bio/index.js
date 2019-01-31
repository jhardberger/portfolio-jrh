import React from 'react';

import { Fade } from 'react-reveal';
import Waypoint from 'react-waypoint';

const Bio = (props) => {
	
	return(
		<div className='bio-container'>
			<Waypoint onEnter={props.handleHideScroll} />  
			<Fade clear cascade>					
				<div className='intro'>	
					<p className='drop-cap-graf'>howdy! My name's John Hardberger. I'm writer, web developer, audio producer, and all-around tinkerer. I'm originally from Texas, but for the last seven years I've hung my hat in Chicagoland, USA. My primary mode of transportation is bycicle. I'm probably listening to music right now. I appreciate a good hot dog.</p>
				<Waypoint onEnter={props.handleHideName} />	
				</div>
				<div className='bio'>
					<div className='prof-pic-container'>
						<img src='/prof-pic.jpeg' className='prof-pic' alt='a portrait of the author as young man' />
					</div>
					<div className='bio-copy'>
						<p>A curious person with a wide range of interests, I’ve always struggled to find focus in my work life. I flirted with careers in graphic design, DJing, and podcasting before settling into a three-year editorial journey, in the course of which I was lucky enough to work as a fact-checker, reporter, writer, and editor for such stellar publications as Food Network magazine, Chicago magazine, the Chicago Tribune, and ApartmentTherapy.com. I’m immensely proud of that work, but found that, over the course of those years, I had drifted away from what excited me about journalism in the first place. I’m still writing, but these days I’m trying to limit the scope of my work that which I'm truly passionate about — to tell only the stories that grab me and don't let go. 
						</p>
						<p>And these days a new passion is driving my creative interests: In December 2018, I completed the intense Web Development Immersive at General Assembly’s Chicago campus. I was drawn to the WDI — and to web dev in general — by the massive creative potential it presents. In ten weeks, I went from knowing a few HTML tags to buliding full-stack web apps from scratch. The course helped me approach programming on terms I could understand, while constantly challenging and encouraging me to put that understanding to practice. I’m extremely excited to test that growth, as well as to continue growing and broadening my perspective as coder, creative thinker, and problem solver.	
						</p>
						<p>At the moment, I’m seeking any work that will allow me to do just that. Below are some of the projects I developed while at General Assembly, some things I’ve worked in the time since graduation, and a few fun, non-dev passion projects. If you like what you see and are interested in getting in touch, please drop me a line. 
						</p>
					</div>
				</div>
			</Fade>
		</div>
	)
}
export default Bio;
