import React, { Component } from 'react';


class WorkContainer extends Component {
	render(){
		return(
			<div class="portfolio">
				<ul>
					<li class="project" id="project-1">
						Project 1
						<img src="/Users/john/salty-sardines/portfolio-mk2/portfolio/public/006.jpg" />
					</li>
					<li class="project" id="project-2">
						Project 2
						<img src="/Users/john/salty-sardines/portfolio-mk2/portfolio/public/008.jpg" />
					</li>
					<li class="project" id="project-3">
						Project 3
						<img src="/Users/john/salty-sardines/portfolio-mk2/portfolio/public/009.jpg" />
					</li>
					<li class="project" id="project-4">
						Project 4
						<img src="/Users/john/salty-sardines/portfolio-mk2/portfolio/public/011.jpg" />
					</li>
				</ul>
			</div>
		)
	}
}
export default WorkContainer;
