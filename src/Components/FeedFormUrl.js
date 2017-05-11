import React, { Component } from 'react';

export default class FeedFormUrl extends Component {

  handleURL = (i, e) => {
    this.props.handleUrls(i, e)
  }

  render() {
    return (
      <p className="clear"><span> url: </span><input type="text" onChange={this.handleURL.bind(this, this.props.i)} value={this.props.value} className="col-xs-9 form-control" /></p>
    );
  }
}