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
import CreateLesson from 'lessonManager/CreateLesson';
import EditLesson from 'lessonManager/EditLesson';
import Previewer from 'Previewer';

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
        <Route exact path={['/codes', '/lessons', '/lessons/create', '/lessons/edit/:id', '/lessons/preview/:id']}>
          <AdminLayout>
            <AdminRoute exact path='/codes' component={Codes} />
            <AdminRoute exact path='/lessons' component={DisplayLessons} />
            <AdminRoute exact path='/lessons/create' component={CreateLesson} />
            <AdminRoute path='/lessons/edit/:id' component={EditLesson} />
            <AdminRoute path='/lessons/preview/:id' component={Previewer} />
          </AdminLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
