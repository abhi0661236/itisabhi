import React, { Component } from 'react'
import kskproject from '../kskProject.png';
import flpclone from '../flpClone.png';
import quizproject from '../quizzProject.png';

export default class Portfolio extends Component {
  render() {
    return (
      <section className='portfolio-wrapper'>
        <div className='title-section'>
          <h1>PORT<span>FOLIO</span></h1><span className="title-bg">Resume</span>
        </div>
        <div className="head">
          <h2>my amazing works</h2>
        </div>
        <div className="global">
          <p className="default-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quae nulla tempora vitae perferendis est aperiam. 
          </p>
        </div>
        <div className="projects">
          <div className="project-container">
            <div className="project">
              <img src={kskproject} alt="project krishaksevasansthan" />
              <div className="project-info">
                <h3>KRISHAK SEVA SANSTHAN</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, aliquam.</p>

                <div className="project-action">
                  <button className='second-btn'>
                    Visit
                  </button>
                  <a className="second-btn" href="#">Source Code</a>
                </div>

              </div>
            </div>

            <div className="project">
              <img src={flpclone} alt="project krishaksevasansthan" />
              <div className="project-info">
                <h3>FLIPKART CLONE</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, aliquam.</p>

                <div className="project-action">
                  <button className='second-btn'>
                    Visit
                  </button>
                  <a className="second-btn" href="#">Source Code</a>
                </div>

              </div>
            </div>
            <div className="project">
              <img src={quizproject} alt="project krishaksevasansthan" />
              <div className="project-info">
                <h3>QUIZ WEBSITE</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, aliquam.</p>

                <div className="project-action">
                  <button className='second-btn'>
                    Visit
                  </button>
                  <a className="second-btn" href="#">Source Code</a>
                </div>

              </div>
            </div>




          </div>
        </div>
      </section>
    )
  }
}
