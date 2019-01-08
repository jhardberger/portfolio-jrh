import React, { Component } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';


class Name extends Component {
	render(){
		return(
			<ParallaxBanner
				className='title'
			    layers={[
			        {
			            image: '/iceland.png',
			            amount: 0.7,
			            slowerScrollRate: false,
			            expanded: true
			        },
			 
	
			    ]}
			    style={{
			    	width: '100%'
			    }}
			>
			</ParallaxBanner>
		)
	}
}
export default Name;
