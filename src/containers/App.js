import React, { Component } from 'react';

import Greeting from '../components/Greeting';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Greeting />
      </div>
    );
  }
}

export default App;
