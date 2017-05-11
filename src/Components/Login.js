import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import FacebookSDK from './FacebookSDK';

export class Login extends Component {

  constructor() {
    super();
    FacebookSDK.getLoginStatus((res) => {
      if (res.isLogin === 'connected') {
        browserHistory.push({
          pathname: "/"
        });
      }
    });
  }

  facebookLogin() {
    FacebookSDK.login((res) => {
      // console.log(res);
      if (res.isLogin === 'connected') {
        browserHistory.push({
          pathname: "/"
        });
      }
    });
    // browserHistory.push({
    //   pathname: "/"
    // });
  }

  render() {
    return (
      <div>
        <button onClick={this.facebookLogin} >Login</button>
      </div>
    );
  }
}