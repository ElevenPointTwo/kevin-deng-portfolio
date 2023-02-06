import React from 'react';
import './Home.css';
import Project from '../Project.js';

import CityStacker from '../Pictures/City Stacker.jpg'
import GravCar from '../Pictures/Gravity car.jpg'
import PhoneStand from '../Pictures/Phone stand.jpg'
import VirtualPiano from '../Pictures/Virtual piano.jpg'

function Home() {
  return (
    <div>
      <div className="projects-column">
        <Project type="Eng" title="City Stacker" description="A toy prototype designed to allow children to stack blocks decorated like buildings, encouraging creativity and childhood development while providing entertainment. Consists of a horizontal movement system made with lego treads, as well as a custom 3D printed scissor mechanism and claw for vertical movement and block capture." color="red" image={CityStacker} width={150} height={200} />

        <Project type="Eng" title="Arduino Piano" description="Mini electronic piano keyboard built using a virtual Arduino simulator. Includes additional features like volumne adjustment and playback recording." color="orange" image={VirtualPiano} width={200} height={160} />

        <Project type="Eng" title="Phone stand" description="Foldable phone stand designed based on research and analysis of patents of existing products. Incorporates a multi-gear system system to allow for efficient base extension, and two lockable hinges for flexible orientation." color="green" image={PhoneStand} width={200} height={160} />

        <Project type="Eng" title="Gravity car" description="A car that transforms the gravitational potential energy stored in a 1kg mass into kinetic energy. Built using a TETRIX kit and utilized a gearbox to increase efficiency and distance travelled." color="blue" image={GravCar} width={150} height={200} />
      </div>
    </div>
  );
}

export default Home;
