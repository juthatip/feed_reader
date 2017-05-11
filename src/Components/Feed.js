import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import async from 'async';
import { Content } from './Content';
import FacebookSDK from './FacebookSDK';

export class Feed extends Component {

  constructor(props) {
    super();
    if(props.hasOwnProperty('feedId') && props.feedId) {
      this.feedId = props.feedId;
    } else {
      this.feedId = null;
    }


    this.getContentByPage = this.getContentByPage.bind(this);

    // todo set current content
    this.contentCount = 0;

    // todo set content per page
    this.contentPerPage = 4;

    this.contents = [];

    this.pageInfo = [];

    this.state = {
      contents: [],
      showViewMoreBtn: false
    };

    //
    FacebookSDK.getLoginStatus((res) => {
      if (res.isLogin === 'connected') {


        this.getContentFanPage();

      } else {
        browserHistory.push({
          pathname: "login"
        });
      }
    });
    // do when this class is calling

  }

  getContentFanPage() {

    const db = firebase.database();
    const feeds = db.ref('feeds/'+ this.feedId);
    feeds.once('value')
      .then((snapshot) => {
        let urls = snapshot.val().urls;
        let facebookCallback = urls.map((fbpage) => {
          return (callback) => {

            db.ref('fbPage/' + fbpage).once('value').then((snapshot) => {
              let pageInfo = snapshot.val();
              this.pageInfo[pageInfo.id] = pageInfo;

              this.getFanPageFeed(fbpage, callback, pageInfo.id);
            });

          }
        });

        // console.log(facebookCallback);
        async.parallel(
          facebookCallback,
          (err, results) => {
            let contents  = _.orderBy(_.concat(...results), ['created_time'], ['desc']);
            this.contents = contents;
            this.getContentByPage();
            this.setState({showViewMoreBtn: true});
          }
        );

      });


    // FB.api(
    //   "/DramaAdd/feed", { fields: "id,message,story,created_time,picture" },
    //   (response) => {
    //
    //     if (response && !response.error) {
    //       /* handle the result */
    //       this.contents = response.data;
    //       this.getContentByPage();
    //       this.setState({showViewMoreBtn: true});
    //     }
    //   }
    // );
  }

  getFanPageFeed(fbpage, callback, pageId) {
    FB.api(
      "/" + fbpage + "/feed", { fields: "id,message,story,created_time,picture" },
      (response) => {

        if (response && !response.error) {
          /* handle the result */
          // this.contents = response.data;
          // console.log(response.data);
          let data = response.data.map((obj) => {

            if (obj.hasOwnProperty('message')) {
              if (obj.message.length > 50) {
                obj.shortMsg = obj.message.toString().substr(0, 50) + '...';
              }
            }

            obj.pageId = pageId;
            return obj;
          });

          callback(null, data);
          // this.getContentByPage();
          // this.setState({showViewMoreBtn: true});
        }
      }
    );
  }

  getContentByPage() {
    this.contentCount += this.contentPerPage;
    let contents = [];
    for (let i in this.contents) {
      if (i >= this.contentCount) {
        break;
      }

      if(typeof this.contents[i] !== 'undefined') {
        contents.push(this.contents[i]);
      }

    }

    if(this.contentCount >= this.contents.length) {
      this.setState({showViewMoreBtn: false});
    }


    this.setState({contents: contents});
  }



  //method
  // getContents() {
  //   return [
  //     {
  //       id: 1,
  //       title: "Chat With The World's Greatest Counterfeiter",
  //       detail: "Several years ago, Frank Bourassa forged himself hundreds of millions of dollars in \"basically undetectable\" $20 bills — and walked away with a slap on the wrist after he was arrested. Bourassa joins us today at 12pm ET to discuss his operation and how he got out of it.",
  //       img:   "http://static.digg.com/images/dae1ba8370cb4f5ea4b1741b4721e669_1381721e13a04e08b5200a2a4770e83d_2_www_large_thumb.jpeg",
  //       time: "2h"
  //     },
  //     {
  //       id: 2,
  //       title: "US Sent $400 Million To Iran As Prisoners Were Freed",
  //       detail: "The US airlifted $400 million of cash to Iran, with the payment coinciding with the January release of four Americans held in Tehran, The Wall Street Journal reported on Tuesday, citing officials briefed on the covert operation.",
  //       img:   "http://static.digg.com/images/1f5d4f0577bd4edca9821ba44e5b3dcf_2atiguV_1_www_large_thumb.jpeg",
  //       time: "1h"
  //     },
  //     {
  //       id: 3,
  //       title: "How To Hack ISIS",
  //       detail: "The latest weapon against terrorists is a room full of computers.",
  //       img:   "http://static.digg.com/images/9d7c5dce2881468a85560497ab8310c6_2b2VI6g_1_www_large_thumb.jpeg",
  //       time: "Last Night"
  //     }
  //   ];
  // }

  render() {

    //
    let viewMoreBtn;

    if(this.state.showViewMoreBtn) {
      viewMoreBtn =  <button className="btn btn-default" onClick={this.getContentByPage}>View More</button>;
    } else {
      viewMoreBtn = '';
    }


    return (
      <div className="container top">

        <div className="row news">
          {this.state.contents.map((object, i) => {

              return <Content data={object} pageInfo={this.pageInfo[object.pageId]} key={i}/>

          })}
        </div>
        {viewMoreBtn}
      </div>
  );
  }
}



