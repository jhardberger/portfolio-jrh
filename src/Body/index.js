import React, { Component } from 'react';

import Nav           from '../Nav/index';
import Bio           from '../Bio/index';
import WorkContainer from '../WorkContainer/index';
import FunStuff		 from '../FunStuff/index';
import Footer		 from '../Footer/index';

import { StickyContainer, Sticky } from 'react-sticky';

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
		 				<div className='spacer'></div>
			            <Bio />
			            <div className='big-spacer'></div>
			            <WorkContainer />
			            <div className='big-spacer'></div>
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

