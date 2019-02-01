import React, { Component } from 'react';

import Nav           from '../Nav/index';
import Bio           from '../Bio/index';
import WorkContainer from '../WorkContainer/index';
import FunStuff		 from '../FunStuff/index';
import Footer		 from '../Footer/index';

import { StickyContainer, Sticky } from 'react-sticky';
import { Fade } 				   from 'react-reveal';
import { Icon } 				   from 'semantic-ui-react';

import ScrollableAnchor 		   from 'react-scrollable-anchor'


class Body extends Component {
	render(){
		return(
			<div className='body'>
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
			            <ScrollableAnchor id={'hi'}>
				            <Bio 
				            	handleHideName={this.props.handleHideName} 
				            	handleHideScroll={this.props.handleHideScroll} 
				            	handleModal={this.props.handleModal} 
				            />
			            </ScrollableAnchor>
			            
			            <div className='scroll-instruction'>
			            	<Fade bottom opposite>
			            		<h1>recent work</h1>
								<Icon size='large' name='chevron down' className='scroll-arrow' />		
							</Fade>
						</div>	
			            
			            <WorkContainer />
			            
			            <div className='scroll-instruction'>
			            	<Fade bottom opposite>
								<h1>non-dev work</h1>
								<Icon size='large' name='chevron down' className='scroll-arrow' />
							</Fade>
						</div>	
			            <ScrollableAnchor id={'play'}>	
			           		<FunStuff />
			            </ScrollableAnchor>
		            </div>
		        <Footer />
	          	</StickyContainer>
          	</div>
		)
	}
}

export default Body;

