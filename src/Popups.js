import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'shards-react';
import { createPopup } from './common/PopupSlice';

const Popups = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <Button onClick={() => {
        console.log("hey");
        dispatch(createPopup({ message: 'hello'}));
        }}>Click Me!</Button>
    </div>
  )
}

export default Popups

