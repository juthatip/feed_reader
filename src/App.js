import React, { Component } from 'react';
import { Feed } from './Components/Feed';
import { Header } from './Components/Header';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      feedId: null
    }

    firebase.database().ref('defaultFeed').once('value').then((snapshot) => {
      const defaultFeed = snapshot.val();
      // console.log(defaultFeed);
      if (defaultFeed !== null) {
        console.log(defaultFeed.feedId);
        this.setState({
          feedId: defaultFeed.feedId
        });
      }
    });
  }

  render() {
    let feed;
    if (this.state.feedId !== null) {
      feed = <Feed feedId={this.state.feedId} />
    } else {
      feed = ''
    }
    return (
      <div className="App">
        <Header />
        {feed}
      </div>
    );
  }
}

export default App;
