import React, { Component } from 'react';
import { Content } from './Content';

export class Feed extends Component {

  constructor() {
    super();
    // do when this class is calling

    this.test = 'oh test';
    this.config = {
      db: 'mysql',
      pass: '123'
    };

    this.contents = [
      {
        title: "Chat With The World's Greatest Counterfeiter",
        detail: "Several years ago, Frank Bourassa forged himself hundreds of millions of dollars in \"basically undetectable\" $20 bills — and walked away with a slap on the wrist after he was arrested. Bourassa joins us today at 12pm ET to discuss his operation and how he got out of it.",
        img:   "http://static.digg.com/images/dae1ba8370cb4f5ea4b1741b4721e669_1381721e13a04e08b5200a2a4770e83d_2_www_large_thumb.jpeg",
        time: "2h"
      },
      {
        title: "US Sent $400 Million To Iran As Prisoners Were Freed",
        detail: "The US airlifted $400 million of cash to Iran, with the payment coinciding with the January release of four Americans held in Tehran, The Wall Street Journal reported on Tuesday, citing officials briefed on the covert operation.",
        img:   "http://static.digg.com/images/1f5d4f0577bd4edca9821ba44e5b3dcf_2atiguV_1_www_large_thumb.jpeg",
        time: "1h"
      },
      {
        title: "How To Hack ISIS",
        detail: "The latest weapon against terrorists is a room full of computers.",
        img:   "http://static.digg.com/images/9d7c5dce2881468a85560497ab8310c6_2b2VI6g_1_www_large_thumb.jpeg",
        time: "Last Night"
      }
    ];

  }

  render() {
    return (
      <div className="container top">
        <div className="row news">
          {this.contents.map(function(object, i){
            console.log(object);
            return <Content data={object} key={i} />;
          })}
        </div>
      </div>
  );
  }
}

