import React, { Component } from 'react';

import Nav           from '../Nav/index';
import Bio           from '../Bio/index';
import WorkContainer from '../WorkContainer/index';
import FunStuff		 from '../FunStuff/index';
import Footer		 from '../Footer/index';

import { StickyContainer, Sticky } from 'react-sticky';
import { Fade } from 'react-reveal';
import { Icon } from 'semantic-ui-react';

class Body extends Component {
	render(){
		return(
			<div className='body'>
				<StickyContainer>
		 			<Sticky>
		 				{({style}) => (
		 					<Nav style={style} showNav={this.props.showNav} handleModal={this.props.handleModal} />
		 				)}
		 			</Sticky>
		 			<div className='content'>
			            <Bio handleHideName={this.props.handleHideName} handleHideScroll={this.props.handleHideScroll} />
			            <div className='scroll-instruction'>
			            	<Fade bottom opposite>
			            		<h1>rECeNt wOrk</h1>
								<Icon size='large' name='chevron down' className='scroll-arrow' />		
							</Fade>
						</div>	
			            <WorkContainer />
			            <div className='scroll-instruction'>
			            	<Fade bottom opposite>
								<h1>nOn-dEV StUfF</h1>
								<Icon size='large' name='chevron down' className='scroll-arrow' />
							</Fade>
						</div>	
			            <FunStuff />
		            </div>
		        <Footer />
	          	</StickyContainer>
          	</div>
		)
	}
}

export default Body;

