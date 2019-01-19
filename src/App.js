import React, { Component } from 'react';

import Splash from './Splash/index';
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
    this.handleHideNav = this.handleHideNav.bind(this);
  }

  handleShowNav(){
    this.setState({ showNav: true})
  }

  handleHideNav(){
    this.setState({ showNav: false})
  }

  render(){
    return (
      <div className='app'>
        <ParallaxProvider>
          <Splash handleShowNav={this.handleShowNav} handleHideNav={this.handleHideNav} />  
        </ParallaxProvider>
        <Body showNav={this.state.showNav} />
      </div>
    );
  }
}

export default App;

