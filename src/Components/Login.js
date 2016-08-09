import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export class Login extends Component {
  goToMain(e) {
    e.preventDefault();
    browserHistory.push({
      pathname: "/"
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.goToMain}>Login</button>
      </div>
    );
  }
}