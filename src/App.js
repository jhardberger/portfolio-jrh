import React, { Component } from 'react';

import ContactModal from './ContactModal/index';
import ResumeModal from './ResumeModal/index';
import Splash from './Splash/index';
import Body from './Body/index';

import { ParallaxProvider } from 'react-scroll-parallax';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loaded: false,
      showScroll: true,
      showName: true,
      showModal: false,
      showResume: false,
      showWriting: false,
    };

    this.handleHideScroll = this.handleHideScroll.bind(this);
    this.handleHideName   = this.handleHideName.bind(this);
    this.handleResume     = this.handleResume.bind(this); 
    this.handleModal      = this.handleModal.bind(this);
    this.handleWriting    = this.handleWriting.bind(this);

  }

  handleLoad(){
    this.setState({ loaded: true });
  }

  handleHideScroll(){
    this.setState({ showScroll: false});
  }

  handleHideName(){
    this.setState({ showName: false});
  }

  handleModal(){
    this.setState({ showModal: !this.state.showModal });
  }

  handleResume(){
    this.setState({ showResume: !this.state.showResume });
  }

  handleWriting(){
    this.setState({ showWriting: !this.state.showWriting });
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
          <ResumeModal 
            handleResume={this.handleResume}

            showResume={this.state.showResume}
          />
          <Splash 
            loaded={this.state.loaded}
            handleModal={this.handleModal}
            handleResume={this.handleResume}


            showScroll={this.state.showScroll} 
            showName={this.state.showName}
          />
          <Body 
            handleHideScroll={this.handleHideScroll}
            handleHideName={this.handleHideName}
            handleModal={this.handleModal}
            handleResume={this.handleResume}
            handleWriting={this.handleWriting}

            showWriting={this.state.showWriting}
          />
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;

