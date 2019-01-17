import React, { Component } from 'react';

import Nav           from './Nav/index';
import Name          from './Name/index';
import Bio           from './Bio/index';
import WorkContainer from './WorkContainer/index';

import { ParallaxProvider } from 'react-scroll-parallax';
import { Slide }            from 'react-reveal';

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
    console.log(this.state.show);
    this.setState({ showNav: !this.state.showNav})
  }

  render(){
    return (
      <div className='app'>
        <div className='body'>
          <ParallaxProvider>
            <Name handleClickNav={this.handleClickNav} />  
            <Slide top when={this.state.showNav}>
              <Nav />
            </Slide> 
            <Bio />
          </ParallaxProvider>
        </div>
      </div>
    );
  }
}

export default App;

