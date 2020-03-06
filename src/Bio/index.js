import React from 'react';

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
						<p className='drop-cap-graf'>howdy! My name is John Hardberger. I'm a writer, web developer, and designer.  My primary mode of transportation is bicycle. I probably have headphones in right now. I appreciate a good hot dog.</p>
					</div>
				</ScrollableAnchor>
				<Waypoint onEnter={props.handleHideName} />	
				<div className='bio'>
					<div className='prof-pic-container'>
						<img src='/prof-pic.jpeg' className='prof-pic' alt='a portrait of the author as a work in progress' />
					</div>
					<div className='bio-copy'>
						<h1>about me</h1>
						<p> I have around four years combined writing, researching, and editing experience, and have spent more than a year at the helm of a major publication's social media presence. As a result I am skilled at engaging with readers and sources alike, both through my writing and on social media.
						</p>
						<p>I'm always seeking out new tools to craft narratives and share ideas. To that end, I enrolled in a programming bootcamp in 2018. After ten weeks of full time coursework, I emerged shiny and new as a full stack web developer. I'm comfortable mucking around in databases, but finessing a user-friendly front end is where I really shine.
						</p> 
						<p>With my handy mutli-media toolbelt and years of storytelling experience, I can be an asset in a variety of creative settings. Below is some past work that I feel represents what I'm capable of, both as a writer and as a designer. If you like what you see and are interested in getting in touch, <span onClick={props.handleModal}><a href='javascript:;'>please drop me a line here</a></span>. 
						</p>
					</div>
				</div>
			</Fade>
		</div>
	)
}
export default Bio;
