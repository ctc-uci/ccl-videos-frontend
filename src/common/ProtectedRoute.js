import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

// TODO: use route from config
const verifyEndpoint = `http://localhost:8000/auth/verify`;

const verifyToken = async () => {
  try {
    await axios.get(verifyEndpoint, { withCredentials: true });
  } catch (error) {
    if (error.response.status === 400) {
      return false;
    }
    // TODO: redirect to error page
  }
  return true;
};

const ProtectedRoute = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  let history = useHistory();

  useEffect(() => {
    (async () => {
      const verified = await verifyToken();
      setIsAuthenticated(verified);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return 'Loading...';
  }
  if (isAuthenticated) {
    return <Route {...props} />;
  }
  return history.push('/adminLogin');
};

export default ProtectedRoute;
