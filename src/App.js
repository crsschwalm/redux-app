import React from 'react';
import Results from './components/results';
import Voter from './components/voter';
import './App.css';

const App = ({ store }) => (
  <div className="container">
    <div className="jumbotron" style={{ textAlign: 'center' }}>
      <h2>Choose a front end framework</h2>
      <h4>Click to vote!</h4>
      <br />
      <Voter store={store} />
    </div>
    <br />
    <Results store={store} />
  </div>
);

export default App;
