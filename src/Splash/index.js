import React from 'react';

import Scroll from '../Scroll/index';
import NamePara from '../NamePara/index';

import { Fade }           from 'react-reveal';
import { ParallaxBanner } from 'react-scroll-parallax';

const Splash = (props) => {

	return(
		<div className='splash-page'>
			<Fade clear when={!props.loaded} >
				<div className='load-screen'>
				</div>
			</Fade>
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
						amount: 0.2,
					},{
						image: '',
						amount: 0.1,
						children: <div className='scroll'><Scroll showScroll={props.showScroll} /></div>
					},{
						image: '',
						amount: 0.9,
						children: <NamePara showName={props.showName} />,
					}
				]}
				style={{
					height: '700px',
				}}
			>
			</ParallaxBanner>
		</div>
	)
}
export default Splash;
