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
    this.handleShowNav = this.handleShowNav.bind(this);
  }

  handleShowNav(){
    this.setState({ showNav: !this.state.showNav})
  }

  render(){
    return (
      <div className='app'>
        <ParallaxProvider>
          <Name handleShowNav={this.handleShowNav} />  
        </ParallaxProvider>
        <Body showNav = {this.state.showNav} />
      </div>
    );
  }
}

export default App;

