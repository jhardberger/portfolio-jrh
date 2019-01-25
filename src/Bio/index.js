import React from 'react';

import { Fade } from 'react-reveal';
import Waypoint from 'react-waypoint';

const Bio = (props) => {
	
	return(
		<div className='bio-container'>
			<Waypoint onEnter={props.handleHideScroll} />  
			<Fade clear cascade>					
				<div className='intro'>	
					<p className='drop-cap-graf'>Howdy! My name's John Hardberger. I'm writer, web developer, and all-around tinkerer. I'm originally from Texas, but for the last seven years I've hung my hat in Chicagoland, USA.</p>
				<Waypoint onEnter={props.handleHideName} />	
				</div>
				<div className='bio'>
					<div className='prof-pic-container'>
						<img src='/prof-pic.jpeg' className='prof-pic' alt='a portrait of the author as young man' />
					</div>
					<div className='bio-copy'>
						<p>Lorem ipsum dolor amet gentrify hammock lorem, ut vice enim labore occaecat copper mug four dollar toast banh mi plaid. Consectetur authentic id iceland ethical echo park kogi, asymmetrical et. Pug food truck coloring book, portland copper mug do disrupt photo booth blog. Chambray eiusmod locavore XOXO narwhal in.</p>

						<p>Chartreuse lyft qui trust fund. Incididunt deep v vegan four loko before they sold out butcher sriracha fam keytar art party. Venmo taiyaki cillum intelligentsia, snackwave vexillologist bushwick pariatur banh mi actually. Tilde hell of +1, sustainable enim ea flannel microdosing eu fingerstache banh mi brooklyn.</p>

						<p>YOLO reprehenderit neutra ex 8-bit heirloom, disrupt cronut flannel. Hella pug typewriter af, VHS adaptogen retro quis adipisicing et cupidatat intelligentsia. Poutine fingerstache consectetur organic, sustainable labore typewriter jean shorts activated charcoal single-origin coffee lo-fi ut plaid est eu. Aute do butcher incididunt dolore. Seitan fashion axe tbh shoreditch chia marfa food truck bicycle rights. Gluten-free leggings fugiat neutra eu nisi.</p>

						<p>Oh. You need a little dummy text for your mockup? How quaint.</p>

						<p>I bet you’re still using Bootstrap too…</p>
					</div>
				</div>
			</Fade>
		</div>
	)
}
export default Bio;
