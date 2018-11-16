import React, { Component } from 'react';
import Nav from './Nav/index';
import WorkContainer from './WorkContainer/index';

import './App.css';

class App extends Component {
  render() {
    return (
      <div class="body">
        <Nav />
        <h1>John Hardberger</h1>
        <h2>writer | programmer | your new best friend</h2>
        <br/>
        <p class="intro">wadduup waddup waddup</p>
        <br />
        <WorkContainer />
      </div>
    );
  }
}

export default App;
