import React from 'react';
import { Modal, ModalHeader, ModalBody, Button } from 'shards-react';
import './OopsModal.css';

const OopsModal = ({ open, toggle }) => {
  return (
    <div>
      <Modal className='oops-modal' open={open} toggle={toggle}>
        <ModalHeader
          titleClass='title'
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          Oops!
          <div className='close-button'>
            <button
              onClick={toggle}
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
        </ModalHeader>
        <ModalBody>
          <p className="oops-modal-body">
            This is not a valid code. Please make sure that you typed in your<br></br>
            code exactly as it appears in your kit. If the issue persists,<br></br>
            please contact us at:
          </p>
          <p>info@childcreativitylab.org</p>
          <div className='oops-modal-button'>
            <Button theme='danger'>Send us an email</Button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default OopsModal;
