import React from 'react';

import { Fade } 		from 'react-reveal';
import { Image } 		from 'semantic-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';

const Design = (props) => {
	const designURLS = ['design1.jpg', 'design2.jpg', 'design3.jpg', 'design4.jpg'];
	const designs = designURLS.map((design, i) => {
		return(

			<Image 
				src={design} 
				className='design-thumb' 
				id={'design-' + i} 
				size='small' 
				onClick={props.handleDesignModal}
			/>
		)
	});

	return(
		<Fade left opposite when={props.showDesign} >
			<div className='design'>
				<h1>design</h1>
				<ScrollableAnchor id={'design'}>
					<div className='design-header'>
						<p>i 've always had a deep love of simple, beautiful graphic design, and while that love has informed my approach to a variety of creative roles, growing and learning as a designer has also at times been an endeavor all its own. Below are some flat components I've designed through the years.</p>
						<p className='enlarge'>(click to enlarge)</p> 
					</div>
				</ScrollableAnchor>
				<div className='design-port'>
					<Fade left cascade when={props.showDesign} >
						{designs}
					</Fade>
				</div>
				<div className='design-footer'>
					<p>I'm also dabbling in web-based design these days—you can see some examples of that through my dev work (<a href='#beatgrinder'>above</a>), the Photo Carousel (also above), and this website (which looks pretty good, if I do say so myself).</p>
				</div>
			</div>
		</Fade>
	)
}
export default Design;
