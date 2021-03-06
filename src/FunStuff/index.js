import React from 'react';

import SelectedWritings from '../SelectedWritings';
import Design 			from '../Design';

import { Fade } 		 	      from 'react-reveal';
import { Image, Reveal, Divider } from 'semantic-ui-react';

import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({offset: -60, scrollDuration: 200});

const FunStuff = (props) => {
	function content(text) {
		return(
			<div className='info-box'>
				<div>
					<p>{text}</p>
				</div>
			</div>
		)
	}

	return(
		<div className='fun-and-copy'>
			<ScrollableAnchor id={'play'} >
				<div className='fun-container'>
					<Fade right cascade>
						<div className='fun' id='selected-writings'>
							<Reveal animated='small fade' onClick={props.handleWriting} >
								<Reveal.Content hidden >
									<Image src='selected-writings.gif' className='fun-thumb' alt='selected writings'/>
								</Reveal.Content>
								<Reveal.Content visible children={content('selected writing')} className='fun-content'>
								</Reveal.Content>
							</Reveal>
						</div>	

						<div className='fun'>
							<Reveal animated='small fade' id='design' onClick={props.handleDesign} >
								<Reveal.Content hidden >
									<Image src='design.gif' className='fun-thumb' alt='design' />
								</Reveal.Content>
								<Reveal.Content visible children={content('doodles & designs')} className='fun-content'>
								</Reveal.Content>
							</Reveal>
						</div>	

						<div className='fun'>
							<Reveal animated='small fade'>
								<Reveal.Content visible >
								</Reveal.Content>
								<Reveal.Content hidden children={content('photo gallery		 (coming soon)')} className='fun-content'>
								</Reveal.Content>
							</Reveal>
						</div>

						<div className='fun'>
							<Reveal animated='small fade'>
								<Reveal.Content visible >
								</Reveal.Content>
								<Reveal.Content hidden children={content('audio experiments		(coming soon)')} className='fun-content'>
								</Reveal.Content>
							</Reveal>
						</div>

					</Fade>
				</div>
			</ScrollableAnchor>
			<div className='fun-just-copy'>
				<Divider section />

				<SelectedWritings 
					showWriting={props.showWriting} 
				/>
				<Design 
					showDesign={props.showDesign} 
					handleDesignModal={props.handleDesignModal}
				/>

				<Divider section />
			</div>
		</div>
	)
}
export default FunStuff;
