import React, { useState } from "react";
import { Form, FormInput, FormGroup, Button } from "shards-react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import config from "config";
import AuthService from "../authService/AuthService";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

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
      alert(err.response.data);
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
      <Button type="submit" onClick={checkLoginCred}>
        Login
      </Button>
    </Form>
  );
};

export default AdminLogin;
