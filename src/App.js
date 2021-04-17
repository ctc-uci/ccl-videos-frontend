import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AlertBanner from './common/AlertBanner';
import "./App.css";
import ModifyLesson from "./Component/ModifyLesson";
import AdminLogin from './Component/AdminLogin'
import ProtectedRoute from './Component/routes/ProtectedRoute'
import { Alert } from 'shards-react';
const temp = () => <div>hello world</div>;

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={temp} />
        <Route exact path="/route" component={temp} />
        <Route exact path="/adminLogin" component={AdminLogin} />
        <ProtectedRoute
          exact
          path="/lessons"
          render={() => (
            <ModifyLesson
              {...{
                id: "4e2403c8-0f94-4ef1-b45b-9affc979fbac",
                category: "edit",
                title: "Some Title",
                description: "Some Description",
                thumbnail: "https://www.w3schools.com/w3css/img_lights.jpg",
                visible: null,
                video:
                  "https://www.dailymotion.com/embed/video/x802p93?autoplay=false&fullscreen=true&ui-start-screen-info=false&scaleMode='fit'&queue-enable=false&sharing-enable=false&ui-logo=false",
              }}
            />
          )}
        />
        { /* add more routes here */ }
      </Switch>
      <AlertBanner />
    </Router>
  );
}

export default App;
