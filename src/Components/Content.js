import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export class Content extends Component {

  pageLoad(e) {
    e.preventDefault();

    browserHistory.push({
      pathname: "page",
      // state: this.props.data
      query: { id: this.props.data.id },

    });
  }

  render() {

    return (
      <div className="news-container col-xs-12 col-sm-6 col-md-4">
        <div className="news-content">
          <div className="row">
            <img src={this.props.pageInfo.picture} className="col-xs-3" alt=""/>
            <span className="col-xs-9">{this.props.pageInfo.name}</span>
          </div>
          <a onClick={this.pageLoad.bind(this)}><img src={this.props.data.picture} className="img-responsive col-xs-6" alt="" /></a>
          <ul className="nav-detail col-xs-6">
            <li>{this.props.data.created_time}</li>
            <li><a href=""><i className="fa fa-bookmark"></i></a></li>
          </ul>
          <p>{this.props.data.shortMsg}</p>
        </div>
      </div>
    );
  }
}