import React from 'react';
import Feature from '../../components/feature/Feature';
import './about.css';

const About = () => {
  return (
    <div className="about section__margin" id="about">
    <div className="about-feature">
      <Feature title="About" text="In the ancient Sanskrit language of Hinduism and Buddhism, mandala means “circle.” Traditionally, a mandala is a geometric design or pattern that represents the cosmos or deities in various heavenly worlds. “It’s all about finding peace in the symmetry of the design and of the universe,”   " />
    </div>
    <div className="about-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore More</p>
    </div>
    <div className="about-container">
      <Feature title="Customization" text="Creating your own custom manadala with various settings , sizes and colors." />
      <Feature title="Uniquness" text="Each and every manadala is uniqe to the person's name or hash which unlocks infinit possiblities of greatness! " />
      <Feature title="Automatically" text="You can generate your own mandala now with a click of a button without drawing a single line." />
    </div>
  </div>
  )
}

export default About