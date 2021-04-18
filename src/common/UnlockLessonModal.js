import React, { useEffect, useState } from "react";
import { FormInput, Button, Modal, ModalHeader, ModalBody } from 'shards-react';
import './UnlockLessonModal.css';

const VIDEONAME = 'VIDEO NAME';
const DATE = 'MM/DD, YYYY, 11:59PM';

const UnlockLessonModal = ( {open, toggle} )  => {

    return (
        <div>
        <Modal open={open} toggle={toggle}>
            <ModalHeader titleClass="title" style={{display: "flex", justifyContent: "center", alignItems: "center",}} >
                Unlock Lesson
                <div className="close-btn">
                    <button type="button" className="close" aria-label="Close" onClick={toggle}>
                    <span classname="close-btn" aria-hidden="true">&times;</span>
                    </button>
                </div>
            </ModalHeader>
            <ModalBody>
                <p className="modal-body">
                    You are about to activate {VIDEONAME}
                    <br></br>
                    <br></br>
                    Once you activate this lesson, it will expire on 
                    <br></br>
                    <span className="date-span">{DATE}</span>
                    <br></br>
                    <br></br>
                    <div className="email-text">Enter a parent's email to receive reminders!</div>
                    <FormInput placeholder="Email Address" />
                </p>
                <div className="modal-button">
                    <Button theme="success">Activate Now</Button>
                </div>
                <div className="activate-text">
                    <a href="#">Activate Lesson Later</a>
                </div>
            </ModalBody>
        </Modal>
        </div>
    );

}

export default UnlockLessonModal;
