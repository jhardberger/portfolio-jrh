import React, { Component } from 'react';
import Name from './Name/index';
import WorkContainer from './WorkContainer/index';
import { ParallaxProvider } from 'react-scroll-parallax';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='body'>
          <ParallaxProvider>
            <Name />   
            <WorkContainer />
          </ParallaxProvider>
        </div>
      </div>
    );
  }
}

export default App;

