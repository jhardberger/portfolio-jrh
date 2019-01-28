import React, { Component } from 'react';

import { Fade } from 'react-reveal';
import { List } from 'semantic-ui-react';



class Nav extends Component {

	render(){
		const style  = this.props.style;
		const handleModal = this.props.handleModal;

		return(
	
			<Fade top when={this.props.showNav}>
				<div className='nav-bar' style={style} >
					<div className='nav-name'>
						<h1>john Hardberger</h1>
					</div>
					<List inverted horizontal className='nav'>
						<List.Item><a className='red' href=''> hi </a></List.Item>
						<List.Item><a className='red' href=''> dev </a></List.Item>
						<List.Item><a className='red' href=''> non-dev </a></List.Item>
						<List.Item><a className='red' href=''> resume </a></List.Item>
						<List.Item onClick={handleModal}><a className='red' href='javascript:;'> contact </a></List.Item>
					</List>
				</div>
			</Fade>

		)
	}
}
export default Nav;

