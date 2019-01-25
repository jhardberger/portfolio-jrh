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
      showScroll: true,
      showName: true
    };

    this.handleShowNav    = this.handleShowNav.bind(this);
    this.handleHideNav    = this.handleHideNav.bind(this);
    this.handleHideScroll = this.handleHideScroll.bind(this);
    this.handleHideName   = this.handleHideName.bind(this);

  }

  handleShowNav(){
    this.setState({ showNav: true})
  }

  handleHideNav(){
    this.setState({ showNav: false})
  }

  handleHideScroll(){
    this.setState({ showScroll: false})
  }

  handleHideName(){
    console.log('hide name');
    this.setState({ showName: false})
  }

  render(){
    return (
      <div className='app'>
        <ParallaxProvider>
          <Splash 
            handleShowNav={this.handleShowNav} 
            handleHideNav={this.handleHideNav}

            showScroll={this.state.showScroll} 
            showName={this.state.showName}
          />
          <Waypoint onEnter={this.handleHideScroll} />  
          <Body 
            showNav={this.state.showNav}

            handleHideName={this.handleHideName}
          />
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;

