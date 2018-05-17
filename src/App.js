import React, { Component } from 'react';
import { voteAngular, voteReact, voteVuejs } from './actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    return this.store.dispatch(voteAngular());
  };

  handleVoteReact = () => {
    return this.store.dispatch(voteReact());
  };

  handleVoteVuejs = () => {
    return this.store.dispatch(voteVuejs());
  };
  render() {
    return (
      <div className="jumbotron" style={{ textAlign: 'center' }}>
        <h2>Choose a front end framework</h2>
        <h4>Click to vote!</h4>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-xs-offset-3 col-xs-2">
              <strong
                onClick={this.handleVoteAngular}
                style={{ padding: '2rem' }}
              >
                Angular
              </strong>
            </div>
            <div className="col-xs-2">
              <strong
                onClick={this.handleVoteReact}
                style={{ padding: '2rem' }}
              >
                React
              </strong>
            </div>
            <div className="col-xs-2">
              <strong
                onClick={this.handleVoteVuejs}
                style={{ padding: '2rem' }}
              >
                Vuejs
              </strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
