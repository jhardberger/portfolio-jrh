import React, { Component } from 'react';

import Nav           from '../Nav/index';
import Bio           from '../Bio/index';
import WorkContainerNew from '../WorkContainerNew/index';
import FunStuff		 from '../FunStuff/index';
import Footer		 from '../Footer/index';

import { StickyContainer, Sticky }  from 'react-sticky';
import { Fade } 					from 'react-reveal';
import { Icon } 					from 'semantic-ui-react';

class BodyNew extends Component {
	render(){
		return(
			<StickyContainer>

	 			<Sticky>
	 				{({style}) => (
	 					<Nav 
	 						style={style} 
	 						handleModal={this.props.handleModal} 
	 						handleResume={this.props.handleResume}
	 					/>
	 				)}
	 			</Sticky>

	 			<div className='content'>
			            
		            <Bio 
		            	handleHideName={this.props.handleHideName} 
		            	handleHideScroll={this.props.handleHideScroll} 
		            	handleResume={this.props.handleResume}
		            	handleModal={this.props.handleModal} 

		            />

		            <WorkContainerNew />
			    </div>

	 		</StickyContainer>
		)
	}

}

export default BodyNew;