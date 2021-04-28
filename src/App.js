import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminRoute from 'adminRoute/AdminRoute';
import AdminLogin from 'adminLogin/AdminLogin';
import Codes from 'codes/Codes';
import AlertBanner from 'common/AlertBanner';
import Layout from 'common/Layout';
import Test from 'Test';
import Landing from 'Landing';
import DisplayLessons from 'displayLessons/displayLessons';

// code unlock area
// use modals for stuff
// admin login flow
// connect lesson modules => edit lesson flow

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Landing} />
          <AdminRoute exact path='/codes' component={Codes} />
          <Route exact path='/test' component={Test}></Route>
          <Route exact path='/login' component={AdminLogin}/>
          <AdminRoute exact path='/lessons' component={DisplayLessons}/>
        </Switch>
      </Layout>
      <AlertBanner />
    </Router>
  );
}

export default App;
