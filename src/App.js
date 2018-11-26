import React, { Component } from 'react';
import Nav from './Nav/index';
import Name from './Name/index';
import WorkContainer from './WorkContainer/index';
import { ParallaxProvider } from 'react-scroll-parallax';


import './App.css';

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Name />
        <div class="body">
          <h2>writer | programmer | your new best friend</h2>
          <p class="intro">wadduup waddup waddup</p>
          <WorkContainer />
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
