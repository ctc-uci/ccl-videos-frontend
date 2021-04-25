import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminLogin from 'adminLogin/AdminLogin';
import Codes from 'codes/Codes';
import Layout from 'common/Layout';
import Test from 'Test';
import Landing from 'landing/Landing';
import DisplayLessons from 'displayLessons/displayLessons';

// code unlock area
// use modals for stuff
// admin login flow
// connect lesson modules => edit lesson flow

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path='/' component={Landing} />
          <Route exact path='/codes' component={Codes} />
          <Route exact path='/test' component={Test}></Route>
          <Route exact path='/login' component={AdminLogin}></Route>
          <Route exact path='/lessons' component={DisplayLessons}></Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
