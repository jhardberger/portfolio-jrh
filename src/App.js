import React, { Component } from 'react';

import ContactModal from './ContactModal/index';
import ResumeModal from './ResumeModal/index';
import DesignModal from './DesignModal/index';
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
      showDesign: true,
      designModal: false,
    };

    this.handleHideScroll = this.handleHideScroll.bind(this);
    this.handleHideName   = this.handleHideName.bind(this);
    this.handleResume     = this.handleResume.bind(this); 
    this.handleModal      = this.handleModal.bind(this);
    this.handleWriting    = this.handleWriting.bind(this);
    this.handleDesign     = this.handleDesign.bind(this);
    this.handleDesignModal= this.handleDesignModal.bind(this);

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
    this.setState({ 
      showWriting: true,
      showDesign: false 
    });
  }

  handleDesign(){
    this.setState({ 
      showDesign: true,
      showWriting: false
    });
  }

  handleDesignModal(e){
    e.persist();

    const currentDesignURL = e.target.src;
    if(!this.state.designModal){
      this.setState({ designModal: currentDesignURL });
    }else{
      this.setState({ designModal: false });
    }
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
          <DesignModal 
            handleDesignModal={this.handleDesignModal}

            designModal={this.state.designModal}
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
            handleDesign={this.handleDesign}
            handleDesignModal={this.handleDesignModal}

            showWriting={this.state.showWriting}
            showDesign={this.state.showDesign}
            designModal={this.state.designModal}
          />
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;

