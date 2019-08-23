import React, { Component } from 'react';

import { Dropdown } from 'semantic-ui-react';

class Nav extends Component {

	render(){
		const style  	   = this.props.style;
		const handleModal  = this.props.handleModal;
		// const handleResume = this.props.handleResume;

		return(
			<div className='nav-bar' style={style} >
				<div className='nav-name'>
					<h1>john hardberger</h1>
				</div>
				<ul className='nav'>
					<li><a href='#hi'> hi </a></li>
					<li><a href='#work'> work </a></li>
					<li onClick={handleModal}><a href='javascript:;'> contact </a></li>
				</ul>
				<div className='mobile-nav'>
					<Dropdown text='MENU' icon='chevron down' floating labeled button className='icon'>
						<Dropdown.Menu>
							<Dropdown.Item><a href='#hi'> HI </a></Dropdown.Item>
							<Dropdown.Item><a href='#beatgrinder'> WORK </a></Dropdown.Item>
							<Dropdown.Item><a href='#play'> PLAY </a></Dropdown.Item>
							<Dropdown.Item onClick={handleModal}><a href='javascript:;'> RÉSUMÉ </a></Dropdown.Item>
							<Dropdown.Item onClick={handleModal}><a href='javascript:;'> CONTACT </a></Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
		)
	}
}
export default Nav;