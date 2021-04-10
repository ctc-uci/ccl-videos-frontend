import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, FormInput, FormSelect, FormCheckbox } from "shards-react";
import "./Codes.css";

const Codes = () => {

  return (
    <Container className="codes-container">
      <Row>
        <Col>
          <h2>Codes</h2>
        </Col>
        <Col>
          <Button style={{float: 'right'}}>+ Generate New Code</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <label htmlFor="filterLesson">Lesson</label>
              <FormSelect id="filterLesson">
                <option value="first">All Lessons</option>
                <option value="second">This is the second option.</option>
              </FormSelect>
            </FormGroup>
          </Form>
        </Col>
        <Col>
          <Form>
            <label htmlFor="filterStatus">Status</label>
            <FormGroup id="filterStatus" className="inline-checkboxes">
              <FormCheckbox>Inactive</FormCheckbox>
              <FormCheckbox>Active</FormCheckbox>
              <FormCheckbox>Expired</FormCheckbox>
            </FormGroup>
          </Form>
        </Col>
        <Col>
          <Form>
            <FormGroup>
              <label htmlFor="filterSearch">Search</label>
              <FormInput id="filterSearch" placeholder="Enter a code or email..."></FormInput>
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <Row>
      <table class="table table-striped">
        <thead class="thead-dark sticky-header">
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Lesson</th>
            <th scope="col">Status</th>
            <th scope="col">Expiration Date</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>The name of the lesson</td>
            <td>Activated</td>
            <td>MM/DD/YYYY</td>
            <td>name@gmail.com</td>
          </tr>
        </tbody>
      </table>
      </Row>
    </Container>
  );
};

export default Codes;
