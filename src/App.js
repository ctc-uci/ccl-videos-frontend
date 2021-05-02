import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminRoute from 'adminRoute/AdminRoute';
import AdminLogin from 'adminLogin/AdminLogin';
import Codes from 'codes/Codes';
import Test from 'Test';
import CustomerPageContainer from 'landing/CustomerPageContainer';
import DisplayLessons from 'displayLessons/displayLessons';
import AdminLayout from 'common/AdminLayout';
import Layout from 'common/Layout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/login', '/test']}>
          <Layout>
            <Route exact path='/' component={CustomerPageContainer} />
            <Route exact path='/test' component={Test}></Route>
            <Route exact path='/login' component={AdminLogin} />
          </Layout>
        </Route>
        <Route exact path={['/codes', '/lessons']}>
          <AdminLayout>
            <AdminRoute exact path='/codes' component={Codes} />
            <AdminRoute exact path='/lessons' component={DisplayLessons} />
          </AdminLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
