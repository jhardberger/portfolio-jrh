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
						<p> I graduated from Northwestern Unvirsity in 2015 with a deep love of storytelling and only a few vaguely sketched plans re: my career. Seeking to put that passion to work, I set out on an editorial journey that ended up lasting more than three years. In that time, I grew as a writer, reporter, and editor. I learned how to engage with readers and sources, both through my writing and on social media.
						</p>
						<p>I'm always seeking out new tools to craft narratives and share ideas. To that end, I enrolled in a programming bootcamp in 2018. After ten weeks of full time coursework, I emerged shiny and new as a full stack web developer. I'm comfortable mucking around in databases, but finessing a user-friendly front end is where I really shine.
						</p> 
						<p>With my handy mutli-media toolbelt and years of storytelling experience, I can be an asset in a variety of creative settings. That is to say, I'm looking for a job: ideally on a team where I can contribute what I know while continuing my own education as a designer and/or storyteller. Below is some work that I feel represents what I'm capable of, on both fronts. If you like what you see and are interested in getting in touch, <span onClick={props.handleModal}><a href='javascript:;'>please drop me a line here</a></span>. 
						</p>
					</div>
				</div>
			</Fade>
		</div>
	)
}
export default Bio;
