import React from 'react';

import { Fade } 		 from 'react-reveal';
import { Image, Reveal } from 'semantic-ui-react';

import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({offset: -60, scrollDuration: 200});

const FunStuff = () => {
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
		<ScrollableAnchor id={'play'} >
			<div className='fun-container'>
				<Fade right cascade>
					<div className='fun'>
						<Reveal animated='small fade'>
							<Reveal.Content visible >
								<Image src='selected-writings.gif' className='fun-thumb' />
							</Reveal.Content>
							<Reveal.Content hidden children={content('selected writing')} className='fun-content'>
							</Reveal.Content>
						</Reveal>
					</div>	

					<div className='fun'>
						<Reveal animated='small fade'>
							<Reveal.Content visible >
							</Reveal.Content>
							<Reveal.Content hidden children={content('photo gallery		 coming soon')} className='fun-content'>
							</Reveal.Content>
						</Reveal>
					</div>	

					<div className='fun'>
						<Reveal animated='small fade'>
							<Reveal.Content visible >
							</Reveal.Content>
							<Reveal.Content hidden children={content('doodles & designs		 coming soon')} className='fun-content'>
							</Reveal.Content>
						</Reveal>
					</div>

					<div className='fun'>
						<Reveal animated='small fade'>
							<Reveal.Content visible >
							</Reveal.Content>
							<Reveal.Content hidden children={content('audio experiments		coming soon')} className='fun-content'>
							</Reveal.Content>
						</Reveal>
					</div>

				</Fade>
			</div>
		</ScrollableAnchor>
	)
}
export default FunStuff;
