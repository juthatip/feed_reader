import React, { Component } from 'react';

export class Test extends Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}