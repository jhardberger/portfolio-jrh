import React, { Component } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import NamePara from '../NamePara';

class Name extends Component {
	render(){
		return(
			<div className='splash-page'>
				<div className='name-splash'>
					<ParallaxBanner
						className='splash-parallax'
						layers={[
							{
								image: '/iceland.png',
								amount: 0.2,
							},{
								image: '',
								amount: 0.9,
								slowerScrollRate: true, 
								children: <NamePara />

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
