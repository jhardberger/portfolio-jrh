import React, { Component } from 'react';

import Nav           from '../Nav/index';
import Bio           from '../Bio/index';
import WorkContainerNew from '../WorkContainerNew/index';
import DropLine		 from '../DropLine/index';
import Footer		 from '../Footer/index';

import { StickyContainer, Sticky }  from 'react-sticky';
import { Fade } 					from 'react-reveal';
import { Icon } 					from 'semantic-ui-react';

import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({offset: 0, scrollDuration: 200});

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

		            <a href='#work'>
			            <div className='scroll-instruction'>
			            	<Fade bottom opposite>
								<h1>work</h1>
								<Icon size='large' name='chevron down' className='scroll-arrow' />
							</Fade>
						</div>	
		            </a>

		            <ScrollableAnchor id={'work'}>
		            	<WorkContainerNew />
		            </ScrollableAnchor>

		            <DropLine 
		            	handleModal={this.props.handleModal} 
		            />

			    </div>

			    <Footer />

	 		</StickyContainer>
		)
	}

}

export default BodyNew;