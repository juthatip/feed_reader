import React, { Component } from 'react';
import { Header } from './Header';

export class PageSetting extends Component {


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