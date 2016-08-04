import React, { Component } from 'react';

export class Header extends Component {
  render(){
    return (
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a href="" className="navbar-brand">Zombie Feed</a>
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