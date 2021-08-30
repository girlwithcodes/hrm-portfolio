import { Link } from 'react-router-dom';
import  profpic from '../../Assets/Images/profpic.jpg';
import './AboutMe.css';
function AboutMe() {
  return (
    <section id="about-me-section">
      <div className="comp-screen-ab">
        
        <div className="title">
          <h1 className="ab-title">About Me</h1>
        </div>

        <div className="ab-p1">

        <div className="prof-pic-div">
          <img src={profpic} className="prof-pic-img" />
        </div>
          <p>
            Hi! I'm Heather Mantooth, a software engineer from Houston, Texas. I believe in the power of technology to making the world more equitable, just, and sustainable.  As a developer, I am committed to helping people by delivering innovative solutions and to continuously learning and growing.
          </p>
          <p>
            I began my career as an educator, a profession that appealed to my love of learning, my desire to help others, and my ability to break down and communicate complex ideas.  As a high school teacher and jack-of-all-trades, I taught English, Mathematics, and ESL, and in 2018, my district offered me the opportunity to become certified in Computer Science.  It was during the certification program that I discovered a passion and an aptitude for coding. The new concepts I was learning  - and then teaching - stimulated me, challenged me, and engaged me.
        </p>
      
        <p>
          In the same year and subsequent    years, several hearbreaking events unfolded in my district that changed my relationship with teaching and spurred me to expand my professional horizons.  In 2020, I began taking college classes at University of Houston, Clear Lake, but after a year, I desired a faster-paced learning envirnoment that focused on building usable products, and enrolled in GA's Software Engineering Immersive course.</p>
        <p>
          I thrived in the intensive, skill-based learning environment of General Assembly, and as I used my skills to build projects and applications, my love of coding, and the creativity, problem-solving, and challenge it entails only grew.  Now having earned my certificate, I look forward to continuing to develop and as I create useful, innovative, and attractive products in my professional life.
        </p>
        </div>

        <div className="nav-links-ab">
          <Link to="/" className="home-button">Home</Link>
          <Link to="/skills" className="my-skills-button">My Skills</Link>
          <Link to="/projects" className="my-projects-button">My  Projects</Link>
          <Link to="/contact" className="contact-me-button">Contact Me</Link>
        </div>
      </div>

    </section>
  )
}

export default AboutMe;