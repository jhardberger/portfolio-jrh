import React, { Component } from 'react';

import { Fade } from 'react-reveal';
import { List } from 'semantic-ui-react';



class Nav extends Component {

	render(){
		const style  = this.props.style;
		const handleModal = this.props.handleModal;

		return(
			<div className='nav-bar' style={style} >
				<div className='nav-name'>
					<h1>john Hardberger</h1>
				</div>
				<ul className='nav'>
					<li><a href=''> hi </a></li>
					<li><a href=''> work </a></li>
					<li><a href=''> play </a></li>
					<li><a href=''> resume </a></li>
					<li onClick={handleModal}><a href='javascript:;'> contact </a></li>
				</ul>
			</div>
		)
	}
}
export default Nav;