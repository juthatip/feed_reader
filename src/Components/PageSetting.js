import React, { Component } from 'react';
import { Header } from './Header';
// import FacebookSDK from './FacebookSDK'

export class PageSetting extends Component {

  constructor() {
    super();
    // console.log(FacebookSDK.getLoginStatus());
  }

  render() {
    let styles = {
      marginTop: "100px"
    }
    return (
      <div>
        <Header />
        <div style={styles}>Setting pages</div>
      </div>
    );
  }
}