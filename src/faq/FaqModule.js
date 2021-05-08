import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Collapse } from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './FaqModule.css';

const FaqModule = ({ question, answer }) => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div>
      <Card className='faq-module'>
        <Button theme='white' onClick={toggleModal} className='question-button'>
          <div className='button-content'>
            <div className='question'>{question}</div>
            <div className='arrow'>
              {openModal ? (
                <FontAwesomeIcon icon={faAngleDown} className='light-blue-icon' />
              ) : (
                <FontAwesomeIcon icon={faAngleRight} className='light-blue-icon' />
              )}
            </div>
          </div>
        </Button>
      </Card>
      <Collapse theme='none' open={openModal}>
        <div className='answer'>{answer}</div>
      </Collapse>
    </div>
  );
};

FaqModule.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FaqModule;
