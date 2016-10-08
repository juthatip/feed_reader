import React, { Component } from 'react';
import { Feed } from './Feed';
import { Header } from './Header';

export class FeedWall extends Component {

  render() {
    return(
      <div>
        <Header />
        <Feed feedId={this.props.params.feedId} />
      </div>
    );
  }
}