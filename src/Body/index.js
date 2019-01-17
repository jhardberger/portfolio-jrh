import React, { Component } from 'react';

import Nav           from '../Nav/index';
import Bio           from '../Bio/index';
import WorkContainer from '../WorkContainer/index';

import { StickyContainer } from 'react-sticky';
import { Slide }           from 'react-reveal';

class Body extends Component {
	constructor(props){
		super();
	}
	render(){
		return(
			<StickyContainer className='body'>
	            <Slide top when={this.props.showNav}>
	            	<Nav />
	            </Slide> 
	            <Bio />
          	</StickyContainer>
		)
	}
}
export default Body;
