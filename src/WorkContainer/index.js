import React, { Component } from 'react';

import Waypoint 	from 'react-waypoint';
import { Parallax } from 'react-scroll-parallax';
import { Fade }  	from 'react-reveal';
import { Icon } 	from 'semantic-ui-react';

import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({offset: 226, scrollDuration: 200});

class WorkContainer extends Component {
	constructor(){
		super();
		this.state = {
			show1: false,
			show2: false,
			show3: false,
			show4: false,
			showDemo: false,
		};
		this.handle1  = this.handle1.bind(this);
		this.handle2  = this.handle2.bind(this);
		this.handle3  = this.handle3.bind(this);
		this.handle4  = this.handle4.bind(this);
		this.showDemo = this.showDemo.bind(this);
		this.hideDemo = this.hideDemo.bind(this);
	}

	//someday I will come dry all this up LOL

	handle1(){
		this.setState({ show1: !this.state.show1 });
	}
	
	handle2(){
		this.setState({ show2: !this.state.show2 });
	}	
	
	handle3(){
		this.setState({ show3: !this.state.show3 });
	}	

	handle4(){
		this.setState({ show4: !this.state.show4 });
	}

	showDemo(){
		this.setState({ showDemo: true });
	}

	hideDemo(){
		this.setState({ showDemo: false });
	}

	render(){
		return(
			<div className="work-container">
				<div className='space-0' />
				<ScrollableAnchor id={'beatgrinder'} >
					<div className='space-0' />
				</ScrollableAnchor>
				<Fade clear opposite when={this.state.show1}>
					<div className="project" id="project-1">
						<Waypoint onEnter={this.handle1} onLeave={this.handle1}/>
						<Parallax offsetYMax='45' offsetYMin='-45' slowerScrollRate >
							<img src='/bg.png' className='project-img' alt='BeatGrinder thumbnail' />
						</Parallax>
						<Parallax offsetYMax='-45' offsetYMin='45' slowerScrollRate >
								<div className='project-body'>
									<div className='project-head' onMouseEnter={this.showDemo} onMouseLeave={this.hideDemo}>
										<h1>
											<a href='https://github.com/jhardberger/sm_client'>beatgrinder</a>
										</h1>
										<Icon name='chevron left' className='demo-arrow' />
										<div className='demo'>
											<Fade right when={this.state.showDemo} >click to demo</Fade>
										</div>
									</div>
									<p>As an avid music listener with wide-ranging tastes, I've always found Spotify's Discovery feature a little limited: As a user, it rarely feels like you're really "discovering" anything so much as being spoonfead a random mash of vaguely similar artists. This is partially because Spotify doesn't share with its users any of the metrics by which it organizes its tunes. 
									</p>
									<p>BeatGrinder is my attempt to create a more organic music discovery experience. It's a full-stack app built with React and Node.js that makes extensive use of the Spotify API. A user can log in with their Spotify account and create "grinds" — never-ending playlists that a user can customize using the musical qualities that Spotify assigns, behind the scenes, to every song. Think of a it as a responsive radio station that lets you set the vibe. 
									</p>
									<p>BeatGrinder is still in the works, but feel free to check out the code on GitHub and keep your eyes peeled for a launch later this year.
									</p>
								</div>
						</Parallax>
					</div>
				</Fade>

				<Fade clear opposite when={this.state.show2}>				
					<div className="project" id="project-2">
						<Waypoint onEnter={this.handle2} onLeave={this.handle2}/>
						<Parallax offsetYMax='45' offsetYMin='-45' slowerScrollRate >
							<img src='/mapulate.png' className='project-img' alt='Mapulate thumbnail' />
						</Parallax>
						<Parallax offsetYMax='-45' offsetYMin='45' slowerScrollRate >
							<ScrollableAnchor id={'mapulate'} >
								<div className='project-body'>
									<div className='project-head' onMouseEnter={this.showDemo} onMouseLeave={this.hideDemo}>
										<h1>
											<a href='https://github.com/jhardberger/Project_3_backend'>mapulate</a>
										</h1>
										<Icon name='chevron left' className='demo-arrow' />
										<div className='demo'>
											<Fade right when={this.state.showDemo} >click to demo</Fade>
										</div>
									</div>
									<p>Built in conjuntion with my General Assembly classmate Chris Lehman, Mapulate is a full-stack app that helps users learn about U.S. city and state populations. In "practice" mode, a user can click or use a search bar to navigate a map of the U.S. and see the populations of various regions. Then, in "game" mode, a user can put their knowledge to the test with several quizes and question types. 
									</p>
									<p>My main contributions to the project were focused around its user interface, which I created in React. I'm particularly proud of the clickable polygons on the map, which work through the Google Maps React API. 
									</p>
								</div>
							</ScrollableAnchor>
						</Parallax>
					</div>
				</Fade>

				<Fade clear opposite when={this.state.show3}>
					<div className="project" id="project-3">
						<Waypoint onEnter={this.handle3} onLeave={this.handle3}/>
						<Parallax offsetYMax='45' offsetYMin='-45' slowerScrollRate >
							<img src='/waxxy.png' className='project-img' alt='Waxxy thumbnail' />
						</Parallax>
						<Parallax offsetYMax='-45' offsetYMin='45' slowerScrollRate >
							<ScrollableAnchor id={'waxxy'} >
								<div className='project-body'>
									<div className='project-head' onMouseEnter={this.showDemo} onMouseLeave={this.hideDemo}>
											<h1>
												<a href='https://github.com/jhardberger/project_2' target="_blank" rel="noopener noreferrer">waxxy</a>
											</h1>
											<Icon name='chevron left' className='demo-arrow' />
											<div className='demo'>
												<Fade right when={this.state.showDemo} >click to demo</Fade>
											</div>
									</div>
									<p>Making use the Discogs API, Waxxy is record collecting app the world deserves. Taking cues from other media-centric social media sites like GoodReads and Letterbox, Waxxy aims to tap into the community aspect of cratedigging with visually pleasing, easy-to-use design. A user can create a digital catalogue of their LPs, organize that collection into shelves, leave personallized "liner notes" on records, and interact with other users to discuss their favorite music. 
									</p>
									<p>For this project, I worked on both the front and back end, writing parts of the interface as well as wrangling the Discogs API. Both I and Charlotte Prevost, the General Assembly classmate with whom I co-developed the project, hope to return to Waxxy and flesh it out in the near future. 									
									</p>
								</div>
							</ScrollableAnchor>
						</Parallax>
					</div>
				</Fade>

				<Fade clear opposite when={this.state.show4}>
					<div className="project" id="project-4">
						<Waypoint onEnter={this.handle4} onLeave={this.handle4}/>
						<Parallax offsetYMax='45' offsetYMin='-45' slowerScrollRate >
							<img src='/qd.png' className='project-img' alt='Qwerty Derby thumbnail' />
						</Parallax>
						<Parallax offsetYMax='-45' offsetYMin='45' slowerScrollRate >
							<ScrollableAnchor id={'qwerty'}>
								<div className='project-body'>
									<div className='project-head' onMouseEnter={this.showDemo} onMouseLeave={this.hideDemo}>
										<h1>
											<a href='https://github.com/jhardberger/project-1-game' target="_blank" rel="noopener noreferrer">qwerty derby</a>
											</h1>
										<Icon name='chevron left' className='demo-arrow' />
										<div className='demo'>
											<Fade right when={this.state.showDemo} >click to demo</Fade>
										</div>
									</div>
									<p>The first code I wrote (that's fit to share), Qwerty Derby is a pick-up-and-play typing game that doesn't pull any punches: it's both surprisingly difficult and, in the opinion of some of my General Assembly classmates, surprisingly addicting.</p>
									<p>I made Qwerty Derby when I was first testing the waters of what I could do with programming. It's written in vanilla Javascript, and has some neat elements — I'm especially proud of the animation, which is advanced by keystroke. Try it out! Just keep an eye on those verbal fastballs: as in real baseball, it's three strikes and you're out! 
									</p>
								</div>
							</ScrollableAnchor>
						</Parallax>
					</div>
				</Fade>

			</div>
		)
	}
}
export default WorkContainer;
