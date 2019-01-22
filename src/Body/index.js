import React, { Component } from 'react';

import Nav           from '../Nav/index';
import Bio           from '../Bio/index';
import WorkContainer from '../WorkContainer/index';

import { StickyContainer, Sticky } from 'react-sticky';

class Body extends Component {
	constructor(props){
		super();
	}

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
		            </div>
	          	</StickyContainer>
          	</div>
		)
	}
}

export default Body;

