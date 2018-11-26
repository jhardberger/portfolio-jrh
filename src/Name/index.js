import React, { Component } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';


class Name extends Component {
	render(){
		return(
			<div>
				<ParallaxBanner
				    className="title"
				    layers={[
				        {
				            image: 'https://i.ytimg.com/vi/i_aBL59bB9c/maxresdefault.jpg',
				            amount: 0.1,
				            slowerScrollRate: false,
				        },
				        {
				            image: 'https://i.pinimg.com/originals/f6/87/8c/f6878c68e2ce2ece9e17b6dd8e2f518d.jpg',
				            amount: 0.2,
				            slowerScrollRate: false,
				        },
				    ]}
				    style={{
				        height: '500px',
				    }}
				>
				    <h1>Banner Children</h1>
				</ParallaxBanner>
	        </div>
		)
	}
}
export default Name;
