import React from 'react';
import './Programming.css';
import Project from '../Project.js';

import Contact from '../Pictures/Contact tracing.jpg';
import Battle from '../Pictures/Robots.png';
import Escape from '../Pictures/Escape room.jpg';
import Painter from '../Pictures/Painter.jpg';

function Programming() {
  return (
    <div>
      <div className="tip-text">
        Tip: scroll horizontally to see all projects, and click on the project titles to view the source code!
      </div>

      <div className="coding-projects-row">
        <Project type="Code" title="Contact tracing form autofiller" link={"https://github.com/ElevenPointTwo/contact-tracing-form"}  description="A Google AppScript program that automates the process of filling out a coronavirus contact tracing form, based on a Google sheets database of existing user data such as birthdays and student numbers. After implementation, this reduced the required completion time by 90%." image={Contact} width={550} height={400} />

        <Project type="Code" title="Battle Bots" link={"https://github.com/ElevenPointTwo/robot-war"} description="Virtual battle bots program built in Java, incorporating Object Oriented Programming principles like inheritance and utilizing record objects and sorting algorithms for enemy targeting." image={Battle} width={550} height={400} />

        <Project type="Code" title="Escape Room" link={"https://github.com/ElevenPointTwo/escape-room"} description="An escape room game built using Pygame. Allows for user interaction through clicking on clues and using keys to toggle inventory items, as well as typing input directly onto the screen." image={Escape} width={550} height={400} />

        <Project type="Code" title="Painter" link={"https://github.com/ElevenPointTwo/painter"} image={Painter} description="A paint program created using Pygame, including features like colour and brush size selection, different drawing tools, as well as opening and saving files." width={550} height={400} />
      </div>
    </div>
  );
}

export default Programming;
