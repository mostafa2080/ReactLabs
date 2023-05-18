import React from 'react';
import ProgressBar from './../../Shared/ProgressBar/bar';

const SkillsSection = () => (
  <section className="skills-section">
    <div className="container">
      <h2>Skills</h2>
      <ProgressBar label="HTML" progress={80} />
      <ProgressBar label="CSS" progress={70} />
      <ProgressBar label="React" progress={90} />
      <ProgressBar label="Node" progress={85} />
    </div>
  </section>
);

export default SkillsSection;
