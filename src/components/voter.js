import React, { Component } from 'react';
import { voteAngular, voteReact, voteVuejs } from '../actions';

export default class Voter extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () => this.store.dispatch(voteAngular());
  handleVoteReact = () => this.store.dispatch(voteReact());
  handleVoteVuejs = () => this.store.dispatch(voteVuejs());

  render() {
    return (
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
            <strong onClick={this.handleVoteReact} style={{ padding: '2rem' }}>
              React
            </strong>
          </div>
          <div className="col-xs-2">
            <strong onClick={this.handleVoteVuejs} style={{ padding: '2rem' }}>
              Vuejs
            </strong>
          </div>
        </div>
      </div>
    );
  }
}
