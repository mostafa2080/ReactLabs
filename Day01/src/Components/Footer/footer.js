import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import Button from './../../Shared/Btn/btn';

const FooterSection = () => (
  <footer className="footer-section">
    <div className="container">
      <h2>
        <Button text="Contact Me" onClick={() => console.log('Contact button clicked!')} />
      </h2>
      <div className="social-icons">
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.twitter.com">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.linkedin.com">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.github.com">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  </footer>
);

export default FooterSection;
