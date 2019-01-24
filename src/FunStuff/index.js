import React, { Component } from 'react';

import { Fade } from 'react-reveal';

class FunStuff extends Component {
	constructor(){
		super();
		this.state = {
			show1: false,
			show2: false,
			show3: false,
			show4: false, 
		}
	}
	handleShow = (e) => {
		console.log(e.currentTarget.attributes.name.value, 'in');
		this.setState({
			[e.currentTarget.attributes.name.value]: true
		})
	}
	handleHide = (e) => {
		console.log(e.currentTarget.attributes.name.value, 'out');
		this.setState({
			[e.currentTarget.attributes.name.value]: false
		})	
	}
	render(){
		return(
			<div className='fun-stuff'>
				<div className='fun-container'>
					<Fade right casscade>
						<div className='fun'>
							<img src='/prof-pic.jpeg' className='fun-thumb' name='show1' onMouseOver={this.handleShow} onMouseOut={this.handleHide} />
							<Fade bottom when={this.state.show1}>
								<div className='info-box'> 
									A fun description goes here
								</div>
							</Fade>
						</div>
						<div className='fun'>
							<img src='/prof-pic.jpeg' className='fun-thumb' name='show2' onMouseOver={this.handleShow} onMouseOut={this.handleHide}  />
							<Fade bottom when={this.state.show2}>
								<div className='info-box'> 
									A fun description goes here
								</div>
							</Fade>
						</div>
						<div className='fun'>
							<img src='/prof-pic.jpeg' className='fun-thumb' name='show3' onMouseOver={this.handleShow} onMouseOut={this.handleHide}  />
							<Fade bottom when={this.state.show3}>
								<div className='info-box'> 
									A fun description goes here
								</div>
							</Fade>
						</div>
						<div className='fun'>
							<img src='/prof-pic.jpeg' className='fun-thumb' name='show4' onMouseOver={this.handleShow} onMouseOut={this.handleHide}  />
							<Fade bottom when={this.state.show4}>
								<div className='info-box'> 
									A fun description goes here
								</div>
							</Fade>
						</div>
					</Fade>
				</div>
				<div className='spacer'>
				</div>
			</div>
		)
	}
}
export default FunStuff;
