import '../css/Home.css';


import React, { Component } from 'react';
import HeroImage from './HeroImage';


export default class Home extends Component {
  render() {
    return (
      <div className='home-container'>
          <div className="hero-container">
              <HeroImage />
          </div>
          <div className='hero-description'>
            <h1>I'm Abhishek Prajapati.</h1>
            <h2>Web Developer</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti enim vitae repellat facere maiores repellendus aspernatur harum molestias libero nihil? Voluptate doloremque, reprehenderit autem esse nam soluta eum obcaecati nihil?
            
            </p>
            <button>Know More</button>
          </div>
      </div>
    )
  }
}
