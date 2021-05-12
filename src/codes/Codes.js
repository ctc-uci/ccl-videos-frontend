import React, { useState, useEffect, useMemo, useReducer } from 'react';
import axios from 'axios';
import moment from 'moment';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormCheckbox,
} from 'shards-react';
import config from 'config';
import { CODE_STATUS_VALUES, CODE_STATUS_CHECKBOXES } from 'consts';
import ClickToCopy from 'common/ClickToCopy';
import GenerateCodesModal from 'codes/GenerateCodesModal';
import Spinner from 'common/Spinner';
import 'codes/Codes.css';

// TODO: email filter and limit input fields
const Codes = () => {
  const [lessons, setLessons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, toggleModal] = useReducer((val) => !val, false);

  // states for filter inputs
  const lessonTitles = useMemo(
    () =>
      lessons.reduce((obj, lesson) => {
        obj[lesson.lessonId] = lesson.title;
        return obj;
      }, {}),
    [lessons]
  );
  const [lessonFilter, setLessonFilter] = useState('ALL');
  const [statusFilter, toggleStatusFilter] = useReducer(
    (current, numCheckbox) => {
      let flags = [...current];
      flags[numCheckbox] = !flags[numCheckbox];
      return flags;
    },
    [true, true, true]
  );
  const [searchFilter, setSearchFilter] = useState('');

  // fetch lessons
  const getLessons = async () => {
    setIsLoading(true);
    const res = await axios.get(`${config.apiURL}/lessons`);
    setLessons(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getLessons();
  }, []);

  const onCodeGeneration = () => {
    getLessons();
  }

  // since we'll probably need a scrollbar just force it so the page doesn't jump when loading codes
  useEffect(() => {
    document.body.classList.add('force-scrollbar');
    return () => {
      document.body.classList.remove('force-scrollbar');
    };
  }, []);

  // extract and filter all the codes
  const codes = useMemo(
    () =>
      [].concat(
        ...lessons.map((lesson) =>
          lesson.codes.map((code) => ({
            lesson: lesson.title,
            lessonId: lesson.lessonId,
            ...code,
          }))
        )
      ),
    [lessons]
  );

  const filteredCodes = useMemo(
    () =>
      codes.filter(
        (code) =>
          (lessonFilter === 'ALL' || lessonFilter === code.lessonId) &&
          statusFilter[CODE_STATUS_CHECKBOXES.indexOf(code.status)] &&
          (searchFilter === ''
            || code.code.startsWith(searchFilter.toUpperCase())
            || (code.email && code.email.toLowerCase().includes(searchFilter.toLowerCase())))
      ),
    [codes, lessonFilter, searchFilter, statusFilter]
  );

  return (
    <Container className='codes-container'>
      <Row className="codes-header">
        <Col>
          <h2>Codes {!isLoading ? `(${codes.length})` : ''}</h2>
        </Col>
        <Col>
          <Button style={{ float: 'right' }} onClick={toggleModal}>
            + Generate New Codes
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <label htmlFor='filterLesson'>Lesson</label>
              <FormSelect id='filterLesson' onChange={(e) => setLessonFilter(e.target.value)}>
                <option value='ALL'>All Lessons</option>
                {Object.keys(lessonTitles).map((lessonId) => (
                  <option value={lessonId} key={lessonId}>
                    {lessonTitles[lessonId]}
                  </option>
                ))}
              </FormSelect>
            </FormGroup>
          </Form>
        </Col>
        <Col>
          <Form>
            <label htmlFor='filterStatus'>Status</label>
            <FormGroup id='filterStatus' className='inline-checkboxes'>
              {CODE_STATUS_CHECKBOXES.map((status, idx) => (
                <FormCheckbox
                  
                  checked={statusFilter[idx]}
                  onChange={(e) => toggleStatusFilter(idx)}
                  key={status}>
                  {CODE_STATUS_VALUES[status][0]}
                </FormCheckbox>
              ))}
            </FormGroup>
          </Form>
        </Col>
        <Col>
          <Form>
            <FormGroup>
              <label htmlFor='filterSearch'>Search</label>
              <FormInput
                id='filterSearch'
                placeholder='Enter a code or email...'
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}></FormInput>
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <table className='table table-striped'>
            <thead className='thead-dark sticky-header'>
              <tr>
                <th scope='col'>Code</th>
                <th scope='col'>Lesson</th>
                <th scope='col'>Status</th>
                <th scope='col'>Expiration Date</th>
                <th scope='col'>Email</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <>
                  <br></br>
                  <Spinner />
                </>
              ) : (
                filteredCodes.map((code) => (
                  <tr key={code.code}>
                    <td>
                      <ClickToCopy id={`copy-code-${code.code}`}>{code.code}</ClickToCopy>
                    </td>
                    <td>{code.lesson}</td>
                    <td className={CODE_STATUS_VALUES[code.status][1]}>
                      {CODE_STATUS_VALUES[code.status][0]}
                    </td>
                    <td>
                      {code.status === 'INACTIVE'
                        ? `${moment.duration(code.ttl, 'seconds').humanize()} after activation`
                        : moment(code.expirationDate).format('MM/DD/YYYY hh:mm A')}
                    </td>
                    <td>{code.email}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </Col>
      </Row>
      <GenerateCodesModal onCodeGeneration={onCodeGeneration} open={isModalOpen} toggle={toggleModal} lessonTitles={lessonTitles} />
    </Container>
  );
};

export default Codes;
