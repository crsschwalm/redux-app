import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  votesAngularInPercent = () => {
    const currState = this.store.getState();
    const decimal = !!currState.angular
      ? currState.angular /
        (currState.angular + currState.react + currState.vuejs)
      : 0;
    return decimal * 100;
  };
  votesReactInPercent = () => {
    const currState = this.store.getState();
    const decimal = !!currState.react
      ? currState.react /
        (currState.angular + currState.react + currState.vuejs)
      : 0;
    return decimal * 100;
  };
  votesVuejsInPercent = () => {
    const currState = this.store.getState();
    const decimal = !!currState.vuejs
      ? currState.vuejs /
        (currState.angular + currState.react + currState.vuejs)
      : 0;
    return decimal * 100;
  };

  votesReactInPercentStyle = () => ({
    width: this.votesReactInPercent() + '%'
  });
  votesAngularInPercentStyle = () => ({
    width: this.votesAngularInPercent() + '%'
  });
  votesVuejsInPercentStyle = () => ({
    width: this.votesVuejsInPercent() + '%'
  });

  render() {
    return (
      <div className="container">
        <span className="label label-danger">
          Angular: {this.votesAngularInPercent().toFixed(2)}%
        </span>
        <div className="progress progress-striped active">
          <div
            className="progress-bar progress-bar-danger"
            style={this.votesAngularInPercentStyle()}
          />
        </div>
        <span className="label label-info">
          React: {this.votesReactInPercent().toFixed(2)}%
        </span>
        <div className="progress progress-striped active">
          <div
            className="progress-bar progress-bar-info"
            style={this.votesReactInPercentStyle()}
          />
        </div>
        <span className="label label-success">
          Vuejs: {this.votesVuejsInPercent().toFixed(2)}%
        </span>
        <div className="progress progress-striped active">
          <div
            className="progress-bar progress-bar-success"
            style={this.votesVuejsInPercentStyle()}
          />
        </div>
      </div>
    );
  }
}

export default Results;
