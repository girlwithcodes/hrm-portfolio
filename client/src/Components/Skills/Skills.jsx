import { Link } from 'react-router-dom';
import { githubIcon, jsIcon, reactIcon, rubyIcon, railsIcon, javaIcon, pythonIcon, phpIcon, mySqlIcon,htmlIcon, cssIcon, communicationIcon, flexibilityIcon, collaborationIcon, googleIcon } from '../../Assets/Images/Icons';
import './Skills.css';

function Skills() {
  return (
    <section id="skills-section">
      <div className="comp-screen-sk">
        
        <div className="title-sk">
          <h1 className="sk-title">Skills</h1>
        </div>

        <div className="tech-skills-div">
          <p>{githubIcon} Github - Leveraged version control and tracking tools in individual and collaborative projects</p>
          <p>{htmlIcon} {cssIcon} HTML/CSS - designed and built various static and dynamic webpages with HTML 5 and CSS 3</p>
          <p>{jsIcon} JavaScript - Use JavaScript to build projects with both React and DOM manipulation</p>
          <p>{reactIcon} React - Used React to build front and back end full CRUD applications with authentication</p>
          <p>{rubyIcon} {railsIcon} Ruby/Rails - Used Ruby on Rails to build back end full CRUD application with authentication using PostGresql</p>
          <p>{javaIcon} Java - my first programming language to learn and to teach</p>
          <p>{pythonIcon} Python - taught fundamentals of CS with python and built various scripting programs in school</p>
        </div>

        <div className="soft-skills-div">
        <p>{communicationIcon} Communication - have honed communication skills through years of building relationships with students, parents, and other educators</p>
        <p>{flexibilityIcon} Adaptability - able to wear many hats, adjust quickly to new roles, and find creative solutions to stubborn problems</p>
        <p>{collaborationIcon} Collaboration - positive, communicative, and effective as both a leader and a team player</p>
        <p>{googleIcon} Google - efficient Google researcher and problem-solver</p>
        </div>

        <div className="nav-links-sk">
          <Link to="/" className="home-button">Home</Link>
          <Link to="/about-me" className="about-me-button">About Me</Link>
          <Link to="/projects" className="my-projects-button">My  Projects</Link>
          <Link to="/contact" className="contact-me-button">Contact Me</Link>
        </div>
      </div>
    </section>
  )
}
export default Skills;