import React, { Component } from 'react';
import _ from 'lodash';
import { Header } from './Header';

export class PageContent extends Component {

  constructor(props) {
    super();

    console.log(props.location.query.id);

    this.content = this.getContent(props.location.query.id);
    console.log(this.content);
  }

  getContent(id) {

    this.contents = [
      {
        id: 1,
        title: "Chat With The World's Greatest Counterfeiter",
        detail: "Several years ago, Frank Bourassa forged himself hundreds of millions of dollars in \"basically undetectable\" $20 bills — and walked away with a slap on the wrist after he was arrested. Bourassa joins us today at 12pm ET to discuss his operation and how he got out of it.",
        img:   "http://static.digg.com/images/dae1ba8370cb4f5ea4b1741b4721e669_1381721e13a04e08b5200a2a4770e83d_2_www_large_thumb.jpeg",
        time: "2h"
      },
      {
        id: 2,
        title: "US Sent $400 Million To Iran As Prisoners Were Freed",
        detail: "The US airlifted $400 million of cash to Iran, with the payment coinciding with the January release of four Americans held in Tehran, The Wall Street Journal reported on Tuesday, citing officials briefed on the covert operation.",
        img:   "http://static.digg.com/images/1f5d4f0577bd4edca9821ba44e5b3dcf_2atiguV_1_www_large_thumb.jpeg",
        time: "1h"
      },
      {
        id: 3,
        title: "How To Hack ISIS",
        detail: "The latest weapon against terrorists is a room full of computers.",
        img:   "http://static.digg.com/images/9d7c5dce2881468a85560497ab8310c6_2b2VI6g_1_www_large_thumb.jpeg",
        time: "Last Night"
      }
    ];

    return _.find(this.contents, { 'id': parseInt(id) });

}

  render(){
    return (
      <div>
      <Header />
      <div className="news-container col-xs-12 col-sm-offset-3 col-sm-5">
        <div className="news-content">
          <img src={this.content.img} className="img-responsive" alt="" />
          <h2><a href="">{this.content.title}</a></h2>
          <ul className="nav-detail">
            <li>{this.content.time}</li>
            <li><a href=""><i className="fa fa-bookmark"></i></a></li>
          </ul>
          <p>{this.content.detail}</p>
        </div>
      </div>
      </div>
    );
  }
}