import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminLogin from 'adminLogin/AdminLogin';
import Codes from 'codes/Codes';
import AlertBanner from 'common/AlertBanner';
import Layout from 'common/Layout';
import Test from 'Test';

const temp = () => <div>hello world</div>;

// code unlock area
// use modals for stuff
// admin login flow
// connect lesson modules => edit lesson flow

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path='/' component={temp} />
          <Route exact path='/codes' component={Codes} />
          <Route exact path='/test' component={Test}></Route>
          <Route exact path='/login' component={AdminLogin}></Route>
        </Layout>
      </Switch>
      <AlertBanner />
    </Router>
  );
}

export default App;
