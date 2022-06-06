import React, { Component } from 'react';
import '../css/HeroImage.css';
import Photo from '../profilephoto.jpg';

export default class HeroImage extends Component {
  render() {
    return (
        <div className='hero-image'>
        <img src={Photo} alt='' />
        </div>
    )
  }
}
