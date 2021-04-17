import React, { useState, useReducer } from 'react';
import { Tooltip } from 'shards-react';
import copy from 'copy-to-clipboard';
import './ClickToCopy.css';

const ClickToCopy = (props) => {
  const [isTooltipOpen, toggleTooltip] = useReducer((prev) => !prev, false);
  const [tooltipText, setTooltipText] = useState('Click to copy');

  const handleClick = (e) => {
    copy(props.children);
    setTooltipText('Copied!');
    setTimeout(() => setTooltipText('Click to copy'), 1500);
  }

  return (
    <>
      <span id={props.id} className='click-to-copy text-primary' onClick={handleClick}>
        {props.children}
      </span>
      <Tooltip
        placement='right'
        open={isTooltipOpen}
        target={`#${props.id}`}
        toggle={toggleTooltip}
      >
        {tooltipText}
      </Tooltip>
    </>
  );
}

export default ClickToCopy;