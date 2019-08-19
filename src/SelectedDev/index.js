import React, { Component } from 'react';

import Waypoint 	from 'react-waypoint';
import { Parallax } from 'react-scroll-parallax';
import { Fade }  	from 'react-reveal';
import { Icon } 	from 'semantic-ui-react';

import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({offset: 226, scrollDuration: 200});

class SelectedDev extends Component {
	constructor(){
		super();
		this.state = {
			show1: false,
			show2: false,
			show3: false,
			show4: false,
		};

		this.showDemo1 = this.showDemo1.bind(this);
		this.hideDemo1 = this.hideDemo1.bind(this);

		this.showDemo2 = this.showDemo2.bind(this);
		this.hideDemo2 = this.hideDemo2.bind(this);

		this.showDemo3 = this.showDemo3.bind(this);
		this.hideDemo3 = this.hideDemo3.bind(this);

		this.showDemo4 = this.showDemo4.bind(this);
		this.hideDemo4 = this.hideDemo4.bind(this);
	}

	//someday I will come dry all this up LOL

	showDemo1(){
		this.setState({ show1: true });
	}

	hideDemo1(){
		this.setState({ show1: false });
	}

	showDemo2(){
		this.setState({ show2: true });
	}

	hideDemo2(){
		this.setState({ show2: false });
	}

	showDemo3(){
		this.setState({ show3: true });
	}

	hideDemo3(){
		this.setState({ show3: false });
	}

	showDemo4(){
		this.setState({ show4: true });
	}

	hideDemo4(){
		this.setState({ show4: false });
	}

	render(){	
		return(
			<Fade right >

				<div className='selected-dev'>
					<h1>web dev</h1>
					<ScrollableAnchor id={'dev'}>
						<div className='dev-header'>
							i have always been been fascinated by graphic and web design, and in December 2018, I decided to parlay that passion into a new set of skills through General Assembly's Web Development Immersive. Here are some apps I wrote while at GA and in my free time after completing the course.
						</div>
					</ScrollableAnchor>

					<Fade right cascade >

						<div className='projects'>

							<div className='project'>
								<div className='project-body' id='project-odd'>
									<div className='project-head' id='project-head-odd' onMouseEnter={this.showDemo1} onMouseLeave={this.hideDemo1}>
										<h1>
											<a href='https://github.com/jhardberger/sm_client'>beatgrinder</a>
										</h1>

										<Icon name='chevron left' className='demo-arrow' />
										<Fade right when={this.state.show1} >
											<div className='demo'><h2>see on github</h2></div>
										</Fade>
									</div>
									<div className='project-copy'>
										My enterprise project for GA: a full-stack app that uses Spotify's API to churns out free-range, organic music recommendations.  
									</div>
								</div>
							</div>

							<div className='project'>
								<div className='project-body' id='project-even'>
									<div className='project-head' id='project-head-even' onMouseEnter={this.showDemo2} onMouseLeave={this.hideDemo2}>
										<h1>
											<a href='https://github.com/jhardberger/Project_3_backend'>mapulate</a>
										</h1>
										
										<Icon name='chevron left' className='demo-arrow' />
										<Fade right when={this.state.show2} >
											<div className='demo'><h2>see on github</h2></div>
										</Fade>
									</div>
									<div className='project-copy'>
										Built in collaboration with a classmate, Mapulate is a population guessing game and learning tool for the census nerd in your life.
									</div>
								</div>
							</div>

							<div className='project'>
								<div className='project-body' id='project-odd'>
									<div className='project-head' id='project-head-odd' onMouseEnter={this.showDemo3} onMouseLeave={this.hideDemo3}>
										<h1>
											<a href='https://github.com/jhardberger/Project_2'>waxxy</a>
										</h1>
										
										<Icon name='chevron left' className='demo-arrow' />
										<Fade right when={this.state.show3} >
											<div className='demo'><h2>see on github</h2></div>
										</Fade>
									</div>
									<div className='project-copy'>
										Another collaborative effort, Waxxy is a social record-collecting app for veteran cratediggers and freshly-pressed wax addicts alike. 
									</div>
								</div>
							</div>
						</div>
					</Fade>

					<div className='dev-footer'>
					Over the ten-week web development course, I went from knowing a few HTML tags to building full stack web apps from scratch. That said, these projects are all very much still works-in-progress. I look forward to sharing my future, nicer apps with you as they (ahem) develop.
					</div>

				</div>
			</Fade>
		)
	}
}
export default SelectedDev;
