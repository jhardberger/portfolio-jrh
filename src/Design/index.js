import React from 'react';

import { Fade } 		from 'react-reveal';
import ScrollableAnchor from 'react-scrollable-anchor';

const Design = (props) => {
	return(
		<Fade left opposite when={props.showDesign} >
			<div className='design'>
				<ScrollableAnchor id={'design'}>
					<div className='design-header'>
						wassssssup
					</div>
				</ScrollableAnchor>
				<div className='design-port'>
				</div>
			</div>
		</Fade>
	)
}
export default Design;
