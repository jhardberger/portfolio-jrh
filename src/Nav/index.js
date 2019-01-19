import React, { Component } from 'react';

import { Fade } from 'react-reveal';


class Nav extends Component {

	render(){
		const style  = this.props.style;

		return(
	
			<Fade top when={this.props.showNav}>
				<div className='nav-bar' style={style} >
						<div className='name'>
							<h1>john hardberger</h1>
						</div>
						<ul className='nav'>
							<li>nav bar tk</li>
							<li>nav bar tk</li>
						</ul>
				</div>
			</Fade>

		)
	}
}
export default Nav;

