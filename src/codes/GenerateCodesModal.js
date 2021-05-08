import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Modal,
  ModalHeader,
  ModalBody,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  ModalFooter,
  Form,
  FormGroup,
  FormSelect,
  FormInput,
  Button,
} from 'shards-react';
import copy from 'copy-to-clipboard';
import config from '../config';
import { DURATION_UNITS } from '../consts';

const GenerateCodesModal = (props) => {
  const { open, toggle, lessonTitles, onCodeGeneration } = props;
  console.log(props);

  // states for generate codes modal inputs
  const [generateCodesLesson, setGenerateCodesLesson] = useState();
  const [generateCodesExpiration, setGenerateCodesExpiration] = useState(2);
  const [generateCodesExpirationUnit, setGenerateCodesExpirationUnit] = useState('DAYS');
  const [generateCodesCount, setGenerateCodesCount] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCodes, setGeneratedCodes] = useState();
  const [copyButtonText, setCopyButtonText] = useState('Copy codes to clipboard');
  
  const generateCodes = async (lessonId, expiration, unit, count) => {
    console.log(lessonId, expiration, unit, count);
    if (isGenerating) {
      return;
    }
    setIsGenerating(true);
    const res = await axios.post(`${config.apiURL}/lessons/${lessonId}/createCodes`, {
      ttl: expiration * DURATION_UNITS[unit][1],
      numCodes: count
    });
    // if ('message' in res.data) {
    //   // TODO: handle error
    // }
    setGeneratedCodes(res.data['generatedCodes'].join(', '));
    setIsGenerating(false);
    onCodeGeneration();
  };

  useEffect(() => {
    if (!open) {
      setGeneratedCodes(undefined);
    }
  }, [open]);

  const handleCopyCodes = () => {
    copy(generatedCodes);
    setCopyButtonText('Copied!');
    setTimeout(() => setCopyButtonText('Copy codes to clipboard'), 1500);
  };

  return (
    <Modal open={open} toggle={toggle} className="modal-dialog-scrollable">
      <ModalHeader>Generate Codes</ModalHeader>
      <ModalBody>
        { !generatedCodes ? (
          <Form id="generateCodesFormContainer">
            <FormGroup>
              <label htmlFor='generateCodesLesson'>Lesson</label>
              <FormSelect id='generateCodesLesson' required onChange={e => setGenerateCodesLesson(e.target.value)}>
                <option value='' disabled selected>Select a lesson</option>
                { Object.keys(lessonTitles).map((lessonId) => (
                <option value={lessonId} key={lessonId}>{lessonTitles[lessonId]}</option>
                )) }
              </FormSelect>
            </FormGroup>
            <FormGroup>
              <label htmlFor='generateCodesExpiration'>Expiration</label>
              <InputGroup>
                <FormInput id='generateCodesExpiration' value={generateCodesExpiration} type='number' onChange={e => setGenerateCodesExpiration(Math.min(Math.max(1, e.target.value), 30))}></FormInput>
                <FormSelect id='generateCodesExpirationUnit' onChange={e => setGenerateCodesExpirationUnit(e.target.value)}>
                  { Object.keys(DURATION_UNITS).map((unit) => (
                  <option value={unit} key={unit}>{DURATION_UNITS[unit][0]}</option>
                  )) }
                </FormSelect>
                <InputGroupAddon type='append'>
                  <InputGroupText className='text-secondary'>after code activation</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <label htmlFor='generateCodesCount'>Number of Codes</label>
              <FormInput id='generateCodesCount' value={generateCodesCount} type='number' onChange={e => setGenerateCodesCount(Math.min(Math.max(1, e.target.value), 5))}></FormInput>
            </FormGroup>
            <Button
              type='submit'
              onClick={() => generateCodes(generateCodesLesson, generateCodesExpiration, generateCodesExpirationUnit, generateCodesCount)}
              disabled={isGenerating}
            >
              { isGenerating ? 'Generating...' : 'Generate codes'}
            </Button>
          </Form>
        ) : (
          <div>
            <div>Lesson: {lessonTitles[generateCodesLesson]}</div>
            <div>Expiration: {generateCodesExpiration} {DURATION_UNITS[generateCodesExpirationUnit][0]} after activation</div>
            <div>Number of codes: {generateCodesCount}</div>
            <p style={{marginTop: '20px'}}>{generatedCodes}</p>
          </div>
        ) }
      </ModalBody>
      { generatedCodes ? (
        <ModalFooter>
          <Button type='button' onClick={handleCopyCodes}>{copyButtonText}</Button>
        </ModalFooter>
      ) : ''}
    </Modal>
  );
};

export default GenerateCodesModal;