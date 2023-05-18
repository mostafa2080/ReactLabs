import resumeFile from '../../files/mostafaResume.pdf';
import Button from './../../Shared/Btn/btn';

const AboutMeSection = () => (
  <section className="about-me-section">
    <div className="container">
      <h2>About Me</h2>
      <div className="about-me-content">
        <div className="about-me-text">
          <h5 className="text-center mb-4">Full Stack Web Developer</h5>
        </div>
        <div className="resume-button text-center">
          <Button
            text="Download Resume"
            onClick={() => window.open(resumeFile, '_blank')}
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutMeSection;
