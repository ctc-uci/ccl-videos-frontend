import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../authService/AuthService';

const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={() => {
      return AuthService.isAuthenticated()
        ? <Component/>
        : <Redirect to='/login' />
    }} />
  )
}
  
  
export default AdminRoute;