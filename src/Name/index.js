import React, { Component } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
// import NamePara from '../NamePara';

// {
// 	image: '',
// 	amount: 0.9,
// 	slowerScrollRate: true, 
// 	children: <NamePara />

// }	

class Name extends Component {
	render(){
		return(
			<div className='splash-page'>
				<div className='name-splash'>
					<ParallaxBanner
						className='splash-parallax'
						layers={[
							{
								image: '/iceland_001.png',
								amount: 0,
							},{
								image: '/iceland_002.png',
								amount: 0.4,
							},{
								image: '/iceland_003.png',
								amount: 0.1,
							}	
						]}
						style={{
							height: '800px'
						}}
					>
					</ParallaxBanner>
				</div>

			</div>
		)
	}
}
export default Name;
