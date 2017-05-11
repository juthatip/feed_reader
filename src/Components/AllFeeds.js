import React, { Component } from 'react';
import { Header } from './Header';
import { Link } from 'react-router';
// import { feedWall } from './feedWall';

export class AllFeeds extends Component {
  constructor() {
    super();

    // this.state = {
    //   feeds: [
    //     {
    //       title: "group_1",
    //       pageName: ["sanook", "kapook", "mthai"]
    //     },
    //     {
    //       title: "group_2",
    //       pageName: ["js", "html", "css"]
    //     },
    //     {
    //       title: "group_3",
    //       pageName: ["diarytoodsy", "bansuay", "talk"]
    //     }
    //   ]
    // }

    this.state = {
      feeds: []
    }

    this.getFeeds();
  }

  getFeeds() {
    firebase.database().ref('feeds').once('value', (snapshot) => {
      console.log(snapshot.val());
      let data = snapshot.val();

      let dataArr = [];

      for (let key in data) {
        let row = data[key];
        row.id = key;
        dataArr.push(row);
      }
      // let dataArr = Object.keys(data).map(key => data[key]);
      this.setState({
        feeds: dataArr
      });
    });
  }

  getUrls = (object) => {
    if (object.hasOwnProperty("urls")) {
      return object.urls.map((page, i) =>
        <ul key={i} className="p-10"><li><i className="fa fa-bolt"></i> {page}</li></ul>
      )
    } else {
      return '';
    }
  }

  handleDelete = (feedId) => {
    console.log(feedId);

    var feedId = firebase.database().ref('feeds/'+ feedId);
    feedId.remove()
      .then(()=> {
        console.log("Remove succeeded.")
        this.getFeeds();

      })
      .catch((error)=> {
        console.log("Remove failed: " + error.message)
      });
  }

  handleSetdefaultFeed(feedId) {
    // console.log(feedId);
    firebase.database().ref('defaultFeed').set({
      feedId: feedId
    });
  }

  render() {
    let styles = {
      marginTop: "100px"
    }

    return (
      <div>
        <Header />
          <div className="overflow-hidden" style={styles}>
            {
              this.state.feeds.map((object, i)=> {
              return (
                <div key={i} className="col-sm-6">
                  <div className="panel panel-default">
                  <h1 className="panel-heading mtop-0">{object.title}</h1>
                    {console.log(object)}
                  { this.getUrls(object) }
                  <div className="panel-footer overflow-hidden text-center">
                  <Link className="btn btn-success mright-10" to={{ pathname: '/feed-wall/' + object.id }}>View</Link>
                  <span className="btn btn-danger mright-10" onClick={this.handleDelete.bind(this, object.id) }> Delete</span>
                  <span className="btn btn-default" onClick={this.handleSetdefaultFeed.bind(this, object.id)}>Set Default</span>
                  </div>
                </div>
                </div>
              )
            })
            }
          </div>

      </div>
    );
  }
}
