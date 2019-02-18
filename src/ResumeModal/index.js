import React from 'react';

import { Icon, Modal } 	from 'semantic-ui-react';

const ResumeModal = (props) => {
	return(
		<div className='resume'>
			<Modal open={props.showResume} dimmer='blurring' >
				<Modal.Header>
					<h1 className='resume-header'>résumé</h1>
				</Modal.Header>
				<Modal.Content>
					<div className='resume-content'>
						<a href='javascript:;'><Icon name='remove' onClick={props.handleResume} /></a>

						<img src='john-hardberger-resume_2019.jpg' className='resume-img' />
					</div>
				</Modal.Content>
			</Modal>
		</div>
	)
}
export default ResumeModal;
