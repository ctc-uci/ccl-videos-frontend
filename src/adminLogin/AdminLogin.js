import React, { useState } from "react";
import { Form, FormInput, FormGroup, Button, Modal, ModalHeader } from "shards-react";
import { useHistory } from "react-router-dom";
import { createAlert } from 'common/AlertBannerSlice';
import { useDispatch } from 'react-redux';
import ChangePassword from 'adminLogin/ChangePassword';
import axios from "axios";
import config from "config";
import AuthService from "authService/AuthService";
import "adminLogin/AdminLogin.css";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const toggle = () => {
    setOpen(!open);
  }

  const checkLoginCred = async () => {
    try {
      const loginResponse = await axios.post(
        `${config.apiURL}/auth/login`,
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      if (loginResponse.status === 200) {
        AuthService.authenticate();
        history.push("/lessons");
      }
    } catch (err) {
      dispatch(createAlert({
        message: err.response.data,
        theme: 'danger',
      }))
    }
  };
  return (
    <Form
      className="admin-login-form"
      onSubmit={(e) => {
        e.preventDefault();
        checkLoginCred();
      }}
    >
      <FormGroup>
        <label htmlFor="username">Username</label>
        <FormInput
          id="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <FormInput
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>
      <p className="change-credentials-link" onClick={toggle}>Change username and password</p>
      <Modal open={open} toggle={toggle}>
        <ModalHeader className="admin-login-modal-header">
          Change username and password
        </ModalHeader>
        <ChangePassword toggleModal={toggle} />
      </Modal>
      <Button type="submit" onClick={checkLoginCred}>
        Login
      </Button>
    </Form>
  );
};

export default AdminLogin;
