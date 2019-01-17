import React, { Component } from 'react';

import Nav           from '../Nav/index';
import Bio           from '../Bio/index';
import WorkContainer from '../WorkContainer/index';

import { Slide }            from 'react-reveal';

class Body extends Component {
	constructor(props){
		super();
	}
	render(){
		return(
			<div className='body'>
	            <Slide top when={this.props.showNav}>
	              <Nav />
	            </Slide> 
	            <Bio />
          	</div>
		)
	}
}
export default Body;
