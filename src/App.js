import React, { Component } from 'react';

import Name from './Name/index';
import Body from './Body/index';

import { ParallaxProvider } from 'react-scroll-parallax';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      showNav: false
    };
    this.handleClickNav = this.handleClickNav.bind(this);
  }

  handleClickNav(){
    this.setState({ showNav: !this.state.showNav})
  }

  render(){
    return (
      <div className='app'>
        <ParallaxProvider>
          <Name handleClickNav={this.handleClickNav} />  
          <Body showNav = {this.state.showNav} />
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;

