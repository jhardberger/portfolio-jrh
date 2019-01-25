import React, { Component } from 'react';

import { Fade } from 'react-reveal';


class Nav extends Component {

	render(){
		const style  = this.props.style;

		return(
	
			<Fade top when={this.props.showNav}>
				<div className='nav-bar' style={style} >
						<div className='nav-name'>
							<h1>john Hardberger</h1>
						</div>
						<ul className='nav'>
							<li> dev </li>|
							<li> art </li>|
							<li> res </li>|
							<li> con </li>
						</ul>
				</div>
			</Fade>

		)
	}
}
export default Nav;

