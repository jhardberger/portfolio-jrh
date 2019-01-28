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
      loaded: false,
      showScroll: true,
      showName: true,
      showModal: false
    };

    this.handleHideScroll   = this.handleHideScroll.bind(this);
    this.handleHideName     = this.handleHideName.bind(this);
    this.handleModal        = this.handleModal.bind(this);

  }

  handleLoad(){
    this.setState({ loaded: true });
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

  componentDidMount(){
    this.handleLoad();
  }

  render(){
    return (
      <div className='app'>
        <ParallaxProvider>
          <ContactModal 
            handleModal={this.handleModal} 
          
            showModal={this.state.showModal} 
          />
          <Splash 
            handleModal={this.handleModal}

            loaded={this.state.loaded}
            showScroll={this.state.showScroll} 
            showName={this.state.showName}
          />
          <Body 
            handleHideScroll={this.handleHideScroll}
            handleHideName={this.handleHideName}
            handleModal={this.handleModal}
          />
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;

