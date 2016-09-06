import React, { Component } from 'react';
import { Header } from './Header';

export class AllFeeds extends Component {
  constructor() {
    super();

    this.state = {
      feeds: [
        {
          title: "group_1",
          pageName: ["sanook", "kapook", "mthai"]
        },
        {
          title: "group_2",
          pageName: ["js", "html", "css"]
        },
        {
          title: "group_3",
          pageName: ["diarytoodsy", "bansuay", "talk"]
        }
      ]
    }

  }


  render() {
    let styles = {
      marginTop: "100px"
    }
    return (
      <div>
        <Header />
          <p style={styles}>test</p>
          <div>
            {
              this.state.feeds.map((object, i)=> {
              return (
                <div key={i} >
                  {object.title}

                  {object.pageName.map((page, i) =>
                    <div key={i}>{page}</div>
                  )}

                </div>);
            })
            }
          </div>

      </div>
    );
  }
}
