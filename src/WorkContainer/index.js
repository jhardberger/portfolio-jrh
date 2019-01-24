import React, { Component } from 'react';

import { Parallax } from 'react-scroll-parallax';
import { Fade } 	from 'react-reveal';


class WorkContainer extends Component {
	render(){
		return(
			<div className="work-container">


				<div className="project" id="project-1">
						<Parallax offsetYMax='-45' offsetYMin='45' slowerScrollRate >
							<Fade bottom opposite>
								<img src='/prof-pic.jpeg' className='project-img' />
							</Fade>
						</Parallax>
						<Parallax offsetYMax='45' offsetYMin='-45' slowerScrollRate >
							<Fade top opposite>
								<div className='project-body'>
									<h1>Project Title</h1>
									<p>orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum volutpat risus, ac fringilla ligula vulputate eu. Vivamus nec velit non nibh lobortis dapibus nec nec velit. Sed aliquam aliquam maximus.
									</p>
							</div>
							</Fade>
						</Parallax>
				</div>

				
				<div className="project" id="project-2">
					<Parallax offsetYMax='-45' offsetYMin='45' slowerScrollRate >
						<Fade bottom opposite>
							<img src='/prof-pic.jpeg' className='project-img' />
						</Fade>
					</Parallax>
					<Parallax offsetYMax='45' offsetYMin='-45' slowerScrollRate >
						<Fade top opposite>
							<div className='project-body'>
								<h1>Project Title</h1>
								<p>orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum volutpat risus, ac fringilla ligula vulputate eu. Vivamus nec velit non nibh lobortis dapibus nec nec velit. Sed aliquam aliquam maximus.
								</p>
							</div>
						</Fade>
					</Parallax>
				</div>


				<div className="project" id="project-3">
					<Parallax offsetYMax='-45' offsetYMin='45' slowerScrollRate >
						<Fade bottom opposite>
							<img src='/prof-pic.jpeg' className='project-img' />
						</Fade>
					</Parallax>
					<Parallax offsetYMax='45' offsetYMin='-45' slowerScrollRate >
						<Fade top opposite>
							<div className='project-body'>
								<h1>Project Title</h1>
								<p>orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum volutpat risus, ac fringilla ligula vulputate eu. Vivamus nec velit non nibh lobortis dapibus nec nec velit. Sed aliquam aliquam maximus.
								</p>
							</div>
						</Fade>
					</Parallax>
				</div>


				<div className="project" id="project-4">
					<Parallax offsetYMax='-45' offsetYMin='45' slowerScrollRate >
						<Fade bottom opposite>
								<img src='/prof-pic.jpeg' className='project-img' />
							</Fade>
					</Parallax>
					<Parallax offsetYMax='45' offsetYMin='-45' slowerScrollRate >
						<Fade top opposite>
							<div className='project-body'>
								<h1>Project Title</h1>
								<p>orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum volutpat risus, ac fringilla ligula vulputate eu. Vivamus nec velit non nibh lobortis dapibus nec nec velit. Sed aliquam aliquam maximus.
								</p>
							</div>
						</Fade>
					</Parallax>
				</div>
			</div>
		)
	}
}
export default WorkContainer;
