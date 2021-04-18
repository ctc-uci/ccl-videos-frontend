import OopsModal from './OopsModal';
import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody } from 'shards-react';
import {Button} from 'shards-react'

const TestModals = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
      }

    return (
        <div>
            
            <Button onClick ={toggle}>
                Oops Modal
            </Button>

            <OopsModal open = {open} toggle={toggle}/>
        </div>
    );
}
export default TestModals;
