import React, { Component } from 'react';
import { Header } from './Header';

export class CreateFeed extends Component {
  constructor() {
   super();
    this.addFeed = this.addFeed.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    // this.handleUrls = this.handleUrls.bind(this);
    this.state = {
      title: '',
      urls: ['']
    }


  }


  handleTitle(e) {
    this.setState({title: e.target.value});
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

  saveFeed() {

    var feedKey = firebase.database().ref().child('feeds').push().key;

    firebase.database().ref('feeds/' + feedKey ).set({
      title: this.state.title,
      urls: this.state.urls
    });

    this.setState({
      title: '',
      urls: ['']
    });

  }

  render() {
    let styles = {
      marginTop: "100px"
    }
    return (
      <div>
        <Header />
        <div style={styles}>
          <p>Title: <input type="text" value={this.state.title} onChange={this.handleTitle} /></p>
          {this.state.urls.map((value, i)=>{
            return <p key={i}>url: <input type="text" onChange={this.handleUrls.bind(this, i)} value={value} /></p>;
          })}

          {/*<a href="">+add url (limit 5 urls)</a>*/}
          <div>
            <buttton onClick={this.addFeed}>Add a Feed</buttton>
          </div>
          <button onClick={this.saveFeed.bind(this)}>Check state</button>
        </div>
      </div>
    );
  }
}