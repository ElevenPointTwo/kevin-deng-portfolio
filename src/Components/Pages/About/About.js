import React from 'react';
import './About.css';

import Kevin from '../Pictures/Kevin photo.jpg';

function About() {
  return (
    <div>
      <div className="about-box">
        <div className="about-info">
          <div className="about-text">
            Hello! My name is Kevin, and I'm a first year mechanical engineering student at the University of Waterloo. I'm passionate about using my skills to make positive contributions and help others as much as possible. I have a diverse set of technical and practical experiences, from 3D printing a toy assembly and designing components for a CubeSat to working as a technical director and even directing my own show. Programming is also an interest of mine that I've pursued for years both in and outside of class, and I'm currently learning to build a structural simulator in Python.

            <br /><br />

            In my free time, you'll find me listening to music or reading a science fiction novel. Sometimes I even try to write my own music and short stories, but no comment on their quality. I'm also huge fan aerospace and green energy, and I often spend time reading up on these subjects to further my understanding. My goal is to one day gain enough skills and experience to make significant contributions to those fields. 
            
            <br /><br />

            But for now, thank you so much for taking the time to check out my little website! If you have any questions, please feel free to contact me at <a href="mailto:ky2deng@uwaterloo.ca">ky2deng@uwaterloo.ca</a>.
          </div>
        </div>

        <div>
          <img src={Kevin} alt={"Kevin"} className="about-picture"/>
        </div>
      </div>
    </div>
  )
}

export default About;