import React from 'react';

import { Icon, Modal } from 'semantic-ui-react';

const ResumeModal = (props) => {
	return(
		<div className='resume'>
			<Modal open={props.showResume} dimmer='blurring'>
				<Modal.Header><h1>résumé</h1></Modal.Header>
				<Modal.Content>
					<a href='javascript:;'><Icon name='remove' onClick={props.handleResume}/></a>	
				</Modal.Content>
			</Modal>
		</div>
	)
}
export default ResumeModal;
