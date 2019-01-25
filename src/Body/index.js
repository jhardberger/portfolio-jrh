import React, { Component } from 'react';

import Nav           from '../Nav/index';
import Bio           from '../Bio/index';
import WorkContainer from '../WorkContainer/index';
import FunStuff		 from '../FunStuff/index';
import Footer		 from '../Footer/index';

import { StickyContainer, Sticky } from 'react-sticky';
import { Icon } from 'semantic-ui-react';

class Body extends Component {
	render(){
		return(
			<div className='body'>
				<StickyContainer>
		 			<Sticky>
		 				{({style}) => (
		 					<Nav style={style} showNav={this.props.showNav} />
		 				)}
		 			</Sticky>
		 			<div className='content'>
			            <Bio handleHideName={this.props.handleHideName} />
			            <div className='scroll-instruction'>
							<h1>SCROLL for some recent work:</h1>
							<Icon size='large' name='chevron down' className='scroll-arrow' />		
						</div>	
			            <WorkContainer />
			            <div className='scroll-instruction'>
							<h1>keep SCROLLING for some FUN STUFF</h1>
							<Icon size='large' name='chevron down' className='scroll-arrow' />
						</div>	
			            <FunStuff />
			            <div className='big-spacer'></div>
		            </div>
		        <Footer />
	          	</StickyContainer>
          	</div>
		)
	}
}

export default Body;

