
import React, { Component } from 'react';
import HeroImage from './HeroImage';


export default class Home extends Component {
  externalElem = '<h2>Hello I am added through string....</h2>';
  render() {
    return (
      <div className='home-container'>
          <div className="hero-container">
              <HeroImage />
          </div>
          <div className='hero-description'>
            <h1>I'm Abhishek Prajapati.</h1>
            <h2>Web Developer</h2>
            <p className="default-para">
            I'm a front‑end web developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
            
            </p>
            <button>Know More</button>
          </div>
      </div>
    )
  }
}
