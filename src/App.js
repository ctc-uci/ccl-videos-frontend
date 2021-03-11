import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
axios.defaults.withCredentials = true;
const temp =  () => {
  test();
  return <div>hi</div>;
};

const test = async () => {
  const res = await axios.post('http://localhost:8000/lessons', {}, {withCredentials: true});
  console.log(res);
}

function App() {
  test();
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={temp} />
        <Route exact path='/route' component={temp} />
        {/* add more routes here */}
      </Switch>
    </Router>
  );
}

export default App;
