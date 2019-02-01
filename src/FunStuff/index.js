import React from 'react';

import { Fade } 		 from 'react-reveal';
import { Image, Reveal } from 'semantic-ui-react'

const FunStuff = () => {
	function content(text) {
		return(
			<div className='info-box'>
				<div>
					<p>{text}<br />(coming soon)</p>
				</div>
			</div>
		)
	}

	return(
		<div className='fun-container'>
			<Fade right cascade>
				<div className='fun'>
					<Reveal animated='small fade'>
						<Reveal.Content visible >
							<Image src='/prof-pic.jpeg' className='fun-thumb' />
						</Reveal.Content>
						<Reveal.Content hidden children={content('selected writing')} className='fun-content'>
						</Reveal.Content>
					</Reveal>
				</div>	


				<div className='fun'>
					<Reveal animated='small fade'>
						<Reveal.Content visible >
							<Image src='/prof-pic.jpeg' className='fun-thumb' />
						</Reveal.Content>
						<Reveal.Content hidden children={content('photo gallery')} className='fun-content'>
						</Reveal.Content>
					</Reveal>
				</div>	

				<div className='fun'>
					<Reveal animated='small fade'>
						<Reveal.Content visible >
							<Image src='/prof-pic.jpeg' className='fun-thumb' />
						</Reveal.Content>
						<Reveal.Content hidden children={content('doodles')} className='fun-content'>
						</Reveal.Content>
					</Reveal>
				</div>

				<div className='fun'>
					<Reveal animated='small fade'>
						<Reveal.Content visible >
							<Image src='/prof-pic.jpeg' className='fun-thumb' />
						</Reveal.Content>
						<Reveal.Content hidden children={content('a/v')} className='fun-content'>
						</Reveal.Content>
					</Reveal>
				</div>

			</Fade>
		</div>
	)
}
export default FunStuff;
