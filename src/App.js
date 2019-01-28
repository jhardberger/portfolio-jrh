import React, { Component } from 'react';

import Splash from './Splash/index';
import Body from './Body/index';
import ContactModal from './ContactModal/index';

import { ParallaxProvider } from 'react-scroll-parallax';
import Waypoint             from 'react-waypoint';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      showScroll: true,
      showName: true,
      showNav: false,
      showModal: false
    };

    this.handleHideScroll = this.handleHideScroll.bind(this);
    this.handleHideName   = this.handleHideName.bind(this);
    this.handleShowNav    = this.handleShowNav.bind(this);
    this.handleHideNav    = this.handleHideNav.bind(this);
    this.handleModal      = this.handleModal.bind(this);

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

  handleModal(){
    this.setState({ showModal: !this.state.showModal })
  }

  render(){
    return (
      <div className='app'>
        <ParallaxProvider>
          <Splash 
            handleShowNav={this.handleShowNav} 
            handleHideNav={this.handleHideNav}
            handleModal={this.handleModal}

            showScroll={this.state.showScroll} 
            showName={this.state.showName}
          />
          <Body 
            handleHideScroll={this.handleHideScroll}
            handleHideName={this.handleHideName}
            handleModal={this.handleModal}

            showNav={this.state.showNav}
          />
          <ContactModal 
            handleModal={this.handleModal} 
          
            showModal={this.state.showModal} 
          />
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;

