import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VideoPage from './views/VideoPage/videoPage';
import './App.css';

const temp = () => <div>hello world</div>;

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={VideoPage} />
      <Route exact path="/route" component={temp} />
      {/* add more routes here */}
    </Switch>
  </Router>

  );
}

export default App;
