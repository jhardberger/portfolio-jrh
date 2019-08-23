import React, { Component } from 'react';

import SelectedWritings from '../SelectedWritings';
import SelectedDev 		from '../SelectedDev';

import Waypoint 	from 'react-waypoint';
import { Parallax } from 'react-scroll-parallax';
import { Fade }  	from 'react-reveal';
import { Icon } 	from 'semantic-ui-react';


class WorkContainerNew extends Component {
	render(){
		return(
			<div className='work-container'>

				<div className='writing'>
					<SelectedWritings />
				</div>

				<div className='web-dev'>
					<SelectedDev />
				</div>	
			
			</div>
		)
	}
}
export default WorkContainerNew;
