import './App.css';
import Project from '../Projects/Project.js';

// Importing project pictures.
import CityStacker from './Pictures/City Stacker.jpg'
import GravCar from './Pictures/Gravity car.jpg'
import PhoneStand from './Pictures/Phone stand.jpg'
import VirtualPiano from './Pictures/Virtual piano.jpg'

function App() {
  return (
    <div>
      <div className="site-header">
        <div className="site-title">
        Kevin Deng's Portfolio
          </div>
          <div className="site-description">Built by Kevin with HTML, CSS, React, and love.</div>
      </div>
      

      <div className="projects-column">
        <Project title="City stacker" color="red" description="A toy prototype designed to nurture childhood development while providing entertainment. Created using TETRIX, LEGO, as well as custom 3D printed parts." image={CityStacker} width={150} height={200}/>

        <Project title="Arduino Piano" color="orange" description="Mini electronic piano keyboard built using a virtual Arduino simulator, and including additional features like volumne adjustment and playback recording." image={VirtualPiano} width={200} height={160}/>

        <Project title="Phone stand" color="green" description="Foldable phone stand designed based on research and analysis of patents of existing products." image={PhoneStand} width={200} height={160}/>

        <Project title="Gravity car" color="blue" description="A car that transforms the gravitational potential energy stored in a 1kg mass and transforms it into kinetic energy." image={GravCar} width={150} height={200}/>

      </div>

    </div>
  );
}

export default App;
