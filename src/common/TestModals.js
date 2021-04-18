import OopsModal from './OopsModal';
import React, { useState } from 'react';
import { Button } from 'shards-react';

const TestModals = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  const [open2, setOpen2] = useState(true);

  const toggle2 = () => {
    setOpen2(!open2);
  };

  return (
    <div>
      <Button onClick={toggle}>Oops Modal</Button>

      <UnlockLessonModal open={open2} toggle={toggle2} />
      <OopsModal open={open} toggle={toggle} />
    </div>
  );
};
export default TestModals;
