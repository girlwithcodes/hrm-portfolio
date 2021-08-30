import { Link } from 'react-router-dom';
import './Welcome.css';

function Welcome() {
  return (
    <section id="welcome-section">
      <div className="comp-screen">
        
        <div className="welcome-message">
          <h1 className="flickering-rainbow">Welcome</h1>
          <h2 className="gradient-text">Heather Mantooth</h2>
          <h2 className="gradient-text">Software Engineer</h2>
        </div>
        <div className="brand-statement gradient-text">I am a creative and resourceful software engineer, fueled by empathy and curiosity to develop innovative solutions to people’s problems. With a background in Math and Computer Science education, I’ve honed my communication and problem-solving skills and my ability to derive order from chaos, sense from nonsense, in fast-paced, dynamic environments. I am a lifelong learner who thrives under a challenge.
        </div>
        <div className="nav-links">
          <Link to="/about-me" className="about-me-button">About Me</Link>
          <Link to="/skills" className="my-skills-button">My Skills</Link>
          <Link to="/projects" className="my-projects-button">My  Projects</Link>
          <Link to="/contact" className="contact-me-button">Contact Me</Link>
        </div>
      </div>
    </section>
  )
}
export default Welcome;