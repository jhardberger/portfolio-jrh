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
			            <Bio />
			            <WorkContainer />
			            <FunStuff />
		            </div>
		        <Footer />
	          	</StickyContainer>
          	</div>
		)
	}
}

export default Body;

