import React from 'react';
import './Community.css';
import Project from '../Project.js';

import Adrift from '../Pictures/Adrift Poster.JPG';
import Tech from '../Pictures/Tech director.jpg';
import EFA from '../Pictures/EFA.jpg';
import Green from '../Pictures/Generation Green.jpg';
import STARZ from '../Pictures/Oakville STARZ.jpg';
import BIG from '../Pictures/BIG.jpg';

function Community() {
  return (
    <div className="community-projects-column">
      <Project type="Com" title="Adrift - Director" description="Directed a self written play with no previous experience. After some research and talking with teachers and friends who have a background in directing, I went through the entire production process from casting eight actors to organizing rehearsals. I had to work with a diverse team of actors and techicians, as well as resolve issues from unexpected absences and scheduling conflicts. In the end I was able to put together a successful production, and won the only Peer Nomination Award and scholarship." image={Adrift} width={300} height={400} />

      <Project type="Com" title="White Oaks Drama Club - Technical Director" description="Worked as a technical director for my school's drama club for three consecutive years. I collaborated with other execs to plan general meetings, and  independently hosted workshops on lighting and sound equipment to engage large groups of interested students. Helping with the technical aspect of school events was also one of my responsibilities, along with two younger students whom I mentored." image={Tech} width={400} height={400} />

      <Project type="Com" title="Education For All - English teacher" description="Taught English to a class of 4th grade students in China via Zoom. I would spend time going through the slideshows before lessons to familiarize myself, and I also took initiative to add in games I came up with to make lessons more engaging. After the term was over, I received a 10/10 rating from the local teacher." image={EFA} width={250} height={100} />

      <Project type="Com" title="Generation Green - Project Developer" description="Organized an initiative to limit screen usage and power consumption in order to reduce greenhouse gas emissions, while also promoting more social interaction. Used Instagram to spread awareness of this project, and once I gathered a group of interested students we all participated by reducing our screen usage by 50% for a week." image={Green} width={450} height={250} />

      <Project type="Com" title="Oakville STARZ - Performer" description="Volunteered as a pianist in an ensemble that regularly performed concerts at senior homes. Contributed hundreds of hours into the organization and received an award for outstanding performance." image={STARZ} width={450} height={350} />

      <Project type="Com" title="BIG Project - Volunteer" description="Helped seniors fill out a research survey studying the impact of the pandemic on the mental health of the elderly. I also led educational workshops on common topics to help answer frequently asked questions from seniors." image={BIG} width={250} height={350} />
    </div>
  )
}

export default Community;