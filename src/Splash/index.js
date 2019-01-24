import React from 'react';

import { Fade }           from 'react-reveal';
import { ParallaxBanner } from 'react-scroll-parallax';
import Waypoint 		  from 'react-waypoint';


const Splash = (props) => {

	const handleShowNav = props.handleShowNav.bind(this);
	const handleHideNav = props.handleHideNav.bind(this);
	
	return(
		<div className='splash-page'>
			<Fade clear>
				<ParallaxBanner
					className='splash-parallax'
					layers={[
						{
							image: '/iceland_001.png',
							amount: 0,
						},{
							image: '/iceland_002.png',
							amount: 0.5,
						},{
							image: '/iceland_003.png',
							amount: 0.1,
						}
					]}
					style={{
						height: '700px'
					}}
				>
				</ParallaxBanner>
			</Fade>

			<Waypoint onLeave={handleShowNav} onEnter={handleHideNav} />

		</div>
	)
}
export default Splash;
