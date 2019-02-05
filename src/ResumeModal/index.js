import React from 'react';

import { Icon, Modal } 	from 'semantic-ui-react';

const ResumeModal = (props) => {
	return(
		<div className='resume'>
			<Modal open={props.showResume} dimmer='blurring' >
				<Modal.Header><h1 className='resume-header'>résumé</h1></Modal.Header>
				<Modal.Content>
					<div className='resume-content'>
						<img src='johnhardberger_resume_2019.png' className='resume-img' />
						<a href='javascript:;'><Icon name='remove' onClick={props.handleResume}/></a>	
					</div>
				</Modal.Content>
			</Modal>
		</div>
	)
}
export default ResumeModal;
