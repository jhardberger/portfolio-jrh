import React, { Component } from 'react';

import Splash from './Splash/index';
import Body from './Body/index';

import { ParallaxProvider } from 'react-scroll-parallax';
import Waypoint             from 'react-waypoint';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      showNav: false,
      showScroll: true
    };

    this.handleShowNav = this.handleShowNav.bind(this);
    this.handleHideNav = this.handleHideNav.bind(this);

    this.handleHideScroll = this.handleHideScroll.bind(this);

  }

  handleShowNav(){
    this.setState({ showNav: true})
  }

  handleHideNav(){
    this.setState({ showNav: false})
  }

  handleHideScroll(){
    console.log('hide!');
    this.setState({ showScroll: false})
  }

  render(){
    return (
      <div className='app'>
        <ParallaxProvider>
          <Splash 
            handleShowNav={this.handleShowNav} 
            handleHideNav={this.handleHideNav}
            showScroll={this.state.showScroll} 
          />
          <Waypoint onEnter={this.handleHideScroll} />  
          <Body 
            showNav={this.state.showNav} 
          />
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;

