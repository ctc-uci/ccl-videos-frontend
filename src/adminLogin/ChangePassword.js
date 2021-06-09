import React, { useState } from "react";
import { FormInput, FormGroup, Button } from "shards-react";
import { createAlert } from 'common/AlertBannerSlice';
import { useDispatch } from 'react-redux';
import config from 'config';
import axios from 'axios';
import 'adminLogin/ChangePassword.css';

const ChangePassword = ({ toggleModal }) => {
  const [currentUsername, setCurrentUsername] = useState(undefined);
  const [currentPassword, setCurrentPassword] = useState(undefined);
  const [newUsername, setNewUsername] = useState(undefined);
  const [newPassword, setNewPassword] = useState(undefined);
  const [reenteredNewPassword, setReenteredNewPassword] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const dispatch = useDispatch();

  const validateCurrentUsernameAndPassword = async () => {
    try {
      const loginResponse = await axios.post(
        `${config.apiURL}/auth/login`,
        {
          username: currentUsername,
          password: currentPassword,
        },
        { withCredentials: true }
      );
      if (loginResponse.status === 200) {
        return true;
      }
    } catch (err) {
      return false;
    }
  }

  const fieldsAreNotEmpty = currentUsername && currentPassword && newUsername && newPassword && reenteredNewPassword

  const newPasswordsMatch = () => {
    return newPassword === reenteredNewPassword;
  }

  const validateNewUsername = () => {
    return newUsername.length >= 6;
  }

  const validateNewPassword = () => {
    return newPassword.length >= 6;
  }

  const toggleErrorMessage = (message) => {
    setErrorMessage(message);
  }

  const submitChangeUsernameAndPasswordRequest = async () => {
    if (!validateNewUsername()) {
      toggleErrorMessage('New username must be at least 6 characters.');
      return;
    }
    else if (!validateNewPassword()) {
      toggleErrorMessage('New password must be at least 6 characters.');
      return;
    }
    else if (!newPasswordsMatch()) {
      toggleErrorMessage('New passwords do not match.')
      return;
    }

    const correctCredentials = await validateCurrentUsernameAndPassword();
    if (!correctCredentials) {
      toggleErrorMessage('Incorrect username or password.');
      return;
    }

    try {
      await axios.post(
        `${config.apiURL}/auth/changeCredentials`,
        {
          oldUsername: currentUsername,
          oldPassword: currentPassword,
          newUsername,
          newPassword
        },
        { withCredentials: true }
      );
    } catch (err) {
      dispatch(createAlert({
        message:
          err.response.data,
        theme: 'danger',
      }))
    }

    dispatch(createAlert({
      message:
        'Credentials changed successfully!',
      theme: 'success',
    }))

    toggleModal();
  }

  return (
    <div className="changepassword-form">
      <p className="changepassword-description">
        In order to protect your account, your username and password must be
      </p>
      <ul>
        <li>at least 6 letters long.</li>
      </ul>
      <FormGroup >
        <label htmlFor="password">Current Username</label>
        <FormInput
          type="text"
          id="password"
          placeholder="Password"
          onChange={(e) => setCurrentUsername(e.target.value)}
        />
        <label htmlFor="password">Current Password</label>
        <FormInput
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <label htmlFor="password">New Username</label>
        <FormInput
          type="text"
          id="password"
          placeholder="Password"
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <label htmlFor="password">New Password</label>
        <FormInput
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <label htmlFor="password">Re-enter New Password</label>
        <FormInput
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setReenteredNewPassword(e.target.value)}
        />
        <Button block disabled={!fieldsAreNotEmpty} onClick={submitChangeUsernameAndPasswordRequest}>Submit</Button>
        <h5 className="changepassword-error-text">{errorMessage}</h5>

      </FormGroup>
    </div>
  );
}

export default ChangePassword;