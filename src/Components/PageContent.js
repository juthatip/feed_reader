import React, { Component } from 'react';

export class PageContent extends Component {
  render(){
    return (
      <div className="news-container col-xs-12">
        <div className="news-content">
          <a href=""><img src={this.props.data.img} className="img-responsive" alt="" /></a>
          <h2><a href="">{this.props.data.title}</a></h2>
          <ul className="nav-detail">
            <li>{this.props.data.time}</li>
            <li><a href=""><i className="fa fa-bookmark"></i></a></li>
          </ul>
          <p>{this.props.data.detail}</p>
        </div>
      </div>
    );
  }
}