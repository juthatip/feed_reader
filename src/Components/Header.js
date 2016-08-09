import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export class Header extends Component {

  loadHome() {
    browserHistory.push({
      pathname: "/"
    });
  }

  render(){
    return (
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a onClick={this.loadHome} className="navbar-brand">Zombie Feed</a>
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="navbar-collapse collapse" id="navbar-main">
            <ul className="nav navbar-nav">
              <li>
                <a href="../help/">Help</a>
              </li>
              <li>
                <a href="http://news.bootswatch.com">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}