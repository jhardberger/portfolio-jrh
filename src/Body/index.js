import React, { Component } from 'react';

import Nav           from '../Nav/index';
import Bio           from '../Bio/index';
// import WorkContainer from '../WorkContainer/index';

import { StickyContainer, Sticky } from 'react-sticky';

class Body extends Component {
	constructor(props){
		super();
	}

	render(){
		return(
			<div className='body'>
				<StickyContainer className='container'>
		 			<Sticky>
		 				{({style}) => (
		 					<Nav style={style} showNav={this.props.showNav} />
		 				)}
		 			</Sticky>
	            <Bio />
	          	</StickyContainer>
          	</div>
		)
	}
}

export default Body;

