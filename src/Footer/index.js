import React from 'react';

import { Icon } from 'semantic-ui-react';

const Footer = () => {
	
	return(
		<div className='footer'>
			<div className='footer-copy'>
				<p>
					Website and all funny jokes by me.<br />
					John Hardberger©
				</p>
			</div>
			<div className='icons'>
				<a href='https://github.com/jhardberger' title='John Hardberger on github'>
					<Icon color='white' size='big' name='github square' />
				</a>
				<a href='https://twitter.com/JHardberger' title='John Hardberger on twitter'>
					<Icon color='white' size='big' name='twitter square' />
				</a>
				<a href='https://www.linkedin.com/in/johnhardberger/' title='John Hardberger on linkedin'>
					<Icon color='white' size='big' name='linkedin' />
				</a>
			</div>
		</div>
	)
}
export default Footer;
