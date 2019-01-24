import React, { Component } from 'react';

import { Icon } from 'semantic-ui-react';
import { Fade } from 'react-reveal';

const Scroll = (props) => {
	
	const showScroll = props.showScroll;

	return(
		<Fade bottom opposite when={showScroll}> 
			<Icon size='massive' name='angle down' className='scroll-arrow' />			
		</Fade>
	)
}
export default Scroll;
