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
						<p className='drop-cap-graf'>howdy! My name is John Hardberger. I'm a writer, designer, and web developer.  My primary mode of transportation is bicycle. I probably have headphones in right now. I appreciate a good hot dog.</p>
					</div>
				</ScrollableAnchor>
				<Waypoint onEnter={props.handleHideName} />	
				<div className='bio'>
					<div className='prof-pic-container'>
						<img src='/prof-pic.jpeg' className='prof-pic' alt='a portrait of the author as a work in progress' />
					</div>
					<div className='bio-copy'>
						<h1>about me</h1>
						<p> As a generally curious person with a wide range of interests, I struggled for a long time to find focus in my work life. I flirted with careers in graphic design, DJing, and podcasting before setting out on an editorial journey that would last more than four years. In that time, I honed my skills as a writer, reporter, and editor. I learned how to engage with readers and sources, both through my writing and on social media. 
						</p>
						<p>But my passion for storytelling - I began to realize - extended beyond the frameworks of traditional journalism. On top of that, my interest in multi-media tools lingered even as I dove deeper and deeper into the editorial world. In 2018, I enrolled in a programming bootcamp to translate these ideas into a new set of skills, and emerged 10 weeks later a newly-minted web developer. 
						</p> 
						<p>I believe that as a result of these wide-ranging skills and paths, I have become well-equipped to navigate the future of media, and to continue my lifelong education in storytelling. I'm currently seeking employment that will allow me to do just that. Below is some work that I feel represents what I'm capable off, both as a developer and as a writer. If you like what you see and are interested in getting in touch, <span onClick={props.handleModal}><a href='javascript:;'>please drop me a line here</a></span>. 
						</p>
					</div>
				</div>
			</Fade>
		</div>
	)
}
export default Bio;
