import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import displayLessons from './displayLessons/displayLessons'
const temp = () => <div>hello world</div>;

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={temp} />
      <Route exact path="/route" component={temp} />
      <Route exact path = "/displayLessons" component={displayLessons} />
      {/* add more routes here */}
    </Switch>
  </Router>

  );
}

export default App;
