import React from 'react';

import { Image, Modal, Icon } from 'semantic-ui-react';


const DesignModal = (props) => {
	return(
		<div className='design-modal'>
			<Modal basic open={props.designModal} >
				<div className='modal-inner'>
					<a href='javascript:;'>
						<Icon name='remove' onClick={props.handleDesignModal}/>
					</a>
					<Image
						src={props.designModal}
						size='massive'
						className='design-big'
					/>
				</div>
			</Modal>
		</div>
	)
}
export default DesignModal;
