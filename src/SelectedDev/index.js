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
			<div className='selected-dev'>
				<h1>web dev</h1>
				<ScrollableAnchor id={'dev'}>
					<div className='dev-header'>
						i have always been been fascinated by graphic and web design, and in December 2018, I decided to parlay that passion into a new set of skills through General Assembly's Web Development Immersive. In ten weeks I went from knowing a few HTML tags to building full stack web apps from scratch. Here are some apps I wrote while at GA and in my free time after completing the course.
					</div>
				</ScrollableAnchor>

				<div className='projects'>

					<div className='project'>
						<div className='project-body' id='project-odd'>
							<div className='project-head' id='project-head-odd' onMouseEnter={this.showDemo} onMouseLeave={this.hideDemo}>
								<h1>
									<a href='https://github.com/jhardberger/sm_client'>beatgrinder</a>
								</h1>

								<Icon name='chevron left' className='demo-arrow' />
								<Fade right when={this.state.showDemo} >
									<div className='demo'><h2>click to demo</h2></div>
								</Fade>
							</div>
							<div className='project-copy'>
								some crap about beatgrinder
							</div>
						</div>
					</div>

					<div className='project'>
						<div className='project-body' id='project-even'>
							<div className='project-head' id='project-head-even' onMouseEnter={this.showDemo} onMouseLeave={this.hideDemo}>
								<h1>
									<a href='https://github.com/jhardberger/Project_3_backend'>mapulate</a>
								</h1>
								
								<Icon name='chevron left' className='demo-arrow' />
								<Fade right when={this.state.showDemo} >
									<div className='demo'><h2>click to demo</h2></div>
								</Fade>
							</div>
							<div className='project-copy'>
								some crap about mapulate
							</div>
						</div>
					</div>

					<div className='project'>
						<div className='project-body' id='project-odd'>
							<div className='project-head' id='project-head-odd' onMouseEnter={this.showDemo} onMouseLeave={this.hideDemo}>
								<h1>
									<a href='https://github.com/jhardberger/Project_2'>waxxy</a>
								</h1>
								
								<Icon name='chevron left' className='demo-arrow' />
								<Fade right when={this.state.showDemo} >
									<div className='demo'><h2>click to demo</h2></div>
								</Fade>
							</div>
							<div className='project-copy'>
								some crap about waxxy
							</div>
						</div>
					</div>

					<div className='project' >
						<div className='project-body' id='project-even'>
							<div className='project-head' id='project-head-even' onMouseEnter={this.showDemo} onMouseLeave={this.hideDemo}>
								<h1>
									<a href='https://github.com/jhardberger/Project-1-game'>qwerty_derby</a>
								</h1>
								
								<Icon name='chevron left' className='demo-arrow' />
								<Fade right when={this.state.showDemo} >
									<div className='demo'><h2>click to demo</h2></div>
								</Fade>
							</div>
							<div className='project-copy'>
								some crap about qd
							</div>
						</div>
					</div>
				</div>
				
			</div>
		)
	}
}
export default SelectedDev;
