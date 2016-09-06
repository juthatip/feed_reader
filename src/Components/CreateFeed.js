import React, { Component } from 'react';
import { Header } from './Header';

export class CreateFeed extends Component {
  constructor() {
   super();
    this.addFeed = this.addFeed.bind(this);
    // this.handleUrls = this.handleUrls.bind(this);
    this.state = {
      urls: ['']
    }


  }

  addFeed() {
    let urls = this.state.urls;
    if (urls.length >= 5) {
      return;
    }
    urls.push('');

    this.setState({
      urls: urls
    });
  }

  handleUrls(i, e) {
    let urls = this.state.urls;
    urls[i] = e.target.value;

    this.setState({
      urls: urls
    });
  }

  checkState() {
    console.log(this.state.urls);
  }

  render() {
    let styles = {
      marginTop: "100px"
    }
    return (
      <div>
        <Header />
        <div style={styles}>
          <p>Title: <input type="text" /></p>
          {this.state.urls.map((value, i)=>{
            return <p key={i}>url: <input type="text" onChange={this.handleUrls.bind(this, i)} /></p>;
          })}

          {/*<a href="">+add url (limit 5 urls)</a>*/}
          <div>
            <buttton onClick={this.addFeed}>Add a Feed</buttton>
          </div>
          <button onClick={this.checkState.bind(this)}>Check state</button>
        </div>
      </div>
    );
  }
}