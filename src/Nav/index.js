import React, { Component } from 'react';

class Nav extends Component {

	render(){
		const style  	   = this.props.style;
		const handleModal  = this.props.handleModal;
		const handleResume = this.props.handleResume;

		return(
			<div className='nav-bar' style={style} >
				<div className='nav-name'>
					<h1>john hardberger</h1>
				</div>
				<ul className='nav'>
					<li><a href='#hi'> hi </a></li>
					<li><a href='#work'> work </a></li>
					<li><a href='#play'> play </a></li>
					<li onClick={handleResume}><a href='javascript:;'> résumé </a></li>
					<li onClick={handleModal}><a href='javascript:;'> contact </a></li>
				</ul>
			</div>
		)
	}
}
export default Nav;