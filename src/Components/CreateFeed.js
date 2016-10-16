import React, { Component } from 'react';
import { Header } from './Header';
import FacebookSDK from './FacebookSDK';

export class CreateFeed extends Component {
  constructor() {
    super();
    FacebookSDK.getLoginStatus(() => {

    });
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

    // var str = "hello world!";
    // var result = /^hello/.test(str);
    // console.log(url.match(/facebook.com\/(\.+)/));
    // console.log(result); // true

    const title = this.state.title;


    const uri = this.state.urls.map((url) => {
      let res = url.match(/facebook.com\/(\w+)/);
      if (res !== null && res[1]) {
        return res[1];
      } else {
        return null;
      }
    }).filter((url) => {
      return url !== null;
    });

    firebase.database().ref('feeds').once('value').then((snapshot) => {
      // console.log(snapshot.numChildren());
      const numChildren = snapshot.numChildren();

      var feedKey = firebase.database().ref().child('feeds').push().key;
      firebase.database().ref('feeds/' + feedKey ).set({
        title: title,
        urls: uri
      }).then(() => {

        if (numChildren === 0) {
          firebase.database().ref('defaultFeed').set({
            feedId: feedKey
          });
        }

        // console.log(uri);

        uri.forEach((element) => {
          FacebookSDK.getPageInfo(element, (resp) => {
            // console.log(resp);
            firebase.database().ref('fbPage/' + element ).set({
              id: resp.id,
              name: resp.name,
              picture: resp.picture.data.url
            })
          })

        });
      });
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
        <div className="container" style={styles}>
          <div className="clearfix">
          <p className="clear"><span>Title:</span> <input type="text" value={this.state.title} onChange={this.handleTitle} className="col-xs-9 form-control" /></p>
          {this.state.urls.map((value, i)=>{
            return <p className="clear" key={i}><span> url: </span><input type="text" onChange={this.handleUrls.bind(this, i)} value={value} className="col-xs-9 form-control" /></p>;
          })}
          </div>
          <div className="clearfix ptop-20">
            <div className="col-md-4 btn-group">
              <buttton className="btn btn-info" onClick={this.addFeed}>Add Url</buttton>
            </div>
            <div className="col-mg-4 btn-group">
              <button className="btn btn-default" onClick={this.saveFeed.bind(this)}>Add Feed</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}