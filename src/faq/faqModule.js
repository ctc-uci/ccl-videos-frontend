import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Collapse } from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import './faqModule.css'

const FaqModule = ({question, answer}) => {
    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
    }

    return (
        <Card className="faqModule">
            <Button squared theme='white' onClick={toggleModal} className="questionButton">
                <div className="buttonContent">
                    <div className="question">
                    {question}
                    </div>
                    <div className="arrow">
                    {openModal ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleLeft} />}
                    </div>
                </div>
            </Button>
            <Collapse squared theme='none' open={openModal} >
            <div className="answer">
                {answer}
            </div>
            </Collapse>
        </Card>
    );
};

FaqModule.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
};

export default FaqModule;