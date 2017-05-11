import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import FacebookSDK from './FacebookSDK';

export class Header extends Component {

  loadHome() {
    browserHistory.push({
      pathname: "/"
    });
  }

  facebookLogout = () => {
    FacebookSDK.logout(() => {
      console.log(2233);
      browserHistory.push({
        pathname: "/login"
      });
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
                <Link to={`/createfeed`}>Create Feed Fanpage</Link>
              </li>
              <li>
                <Link to={`/feeds`}>All Feeds</Link>
              </li>
              <li>
                <Link to={`/setting`}>Setting</Link>
              </li>
            </ul>
            <button onClick={this.facebookLogout}>Logout</button>
          </div>
        </div>
      </div>
    );
  }
}