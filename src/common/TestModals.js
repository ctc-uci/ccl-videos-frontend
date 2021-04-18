import React, { useEffect, useState } from "react";
import UnlockLessonModal from './UnlockLessonModal';
import { Button } from 'shards-react';

const TestModals = () => {
    const [open, setOpen] = useState(true);

    const toggle = () => {
        setOpen(!open);
    }

    return (
        <div>
            <Button onClick={toggle} data-toggle="modal" data-target="#exampleModal">Test Modals</Button>
            <UnlockLessonModal open={open} toggle={toggle} />
        </div>
    );
}

export default TestModals;
