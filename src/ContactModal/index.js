import React from 'react';

import { Button, Icon, Header, Modal } from 'semantic-ui-react';

const ContactModal = (props) => {
	return(
		<div className='contact'>

			<Modal className='contact-modal' open={props.showModal} >
				<Modal.Header>Drop me a line!</Modal.Header>
				<Modal.Content>
					<p>Well, here's my contact info ya dummies</p>
					<Button onClick={props.handleModal}>
						<Icon name='remove' />
					</Button>
				</Modal.Content>
			</Modal>

		</div>
	)
}
export default ContactModal;

