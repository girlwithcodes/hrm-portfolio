import { Link } from 'react-router-dom';
import  project_uplift from '../../Assets/Images/project_uplift.png';
import gnomazon from '../../Assets/Images/gnomazon.png';
import is_bookshelf from '../../Assets/Images/is_bookshelf.png';
import { linkIcon, githubPink } from '../../Assets/Images/Icons';
import './Projects.css';

function Projects() {
  return (
    <section id="projects-section">
      <div className="comp-screen-pr">
        
        <div className="title-pr">
          <h1 className="pr-title">My Projects</h1>
        </div>

        <div className="all-projects-div">
          <div className="projects-div">
            <h3>Project Uplift</h3>
            <img alt="project uplift screen" src={project_uplift} className="project-img"/>
            <div className="projects-text-div">
              <p>A post board application for affirmations and celebrations  that allows users to create posts with images and text and save to customized boards or share to public boards
              </p>
              <p>⬩Full CRUD API build with Postgresql and Ruby on Rails</p>
              <p>
              ⬩Front end build with React JS</p>
            </div>

            <div className="project-links-div">
              <a href="https://github.com/girlwithcodes/Project-Uplift" target="_blank" rel="noopener noreferrer">{githubPink}</a>
              <a href="https://project-uplift.netlify.app/" target="_blank" rel="noopener noreferrer">{linkIcon}</a>
            </div>
          </div>

          <div className="projects-div">
          <h3>Gnome-A-Zon</h3>
            <img alt="gnome-a-zon screen" src={gnomazon} className="project-img"/>
            <div className="projects-text-div">
              <p>A garden gnome marketplace allowing members to create, edit, and delete and users to browse and search gnomes for sale, built using the MERN stack.
              </p>
              <p>⬩Developed back-end full CRUD API with user authentication with MongoDB</p>
              <p>
              ⬩Managed team Git flow to coordinate push and pull requests on Git branches</p>
            </div>

            <div className="project-links-div">
              <a href="https://github.com/girlwithcodes/Gnome-A-zon" target="_blank" rel="noopener noreferrer">{githubPink}</a>
              <a href="https://gnome-a-zon.netlify.app/" target="_blank" rel="noopener noreferrer">{linkIcon}</a>
            </div>
          </div>

          <div className="projects-div">
          <h3>The Intersectional Bookshelf</h3>
            <img alt="intersectional bookshelf screen" src={is_bookshelf} className="project-img"/>
            <div className="projects-text-div">
              <p>A book recommendation application allowing users to recommend, browse, and search for books with representation of underrepresented populations  (React, NodeJS, and Airtable).
              </p>
              <p>⬩Used linked tables in Airtable to allow users to tag recommendations with genres, representation tags, themes, and trigger warnings and create new tags</p>
              <p>
              ⬩Implemented search logic to sort search results by best matches for genre and tags</p>
            </div>

            <div className="project-links-div">
              <a href="https://github.com/girlwithcodes/intersectional-bookshelf" target="_blank" rel="noopener noreferrer">{githubPink}</a>
              <a href="https://intersectional-bookshelf.netlify.app/" target="_blank" rel="noopener noreferrer">{linkIcon}</a>
            </div>
          </div>

          <div className="projects-div">
    
          </div>
        </div>
        <div className="nav-links-sk">
          <Link to="/" className="home-button">Home</Link>
          <Link to="/about-me" className="about-me-button">About Me</Link>
          <Link to="/skills" className="my-skills-button">My Skills</Link>
          <Link to="/contact" className="contact-me-button">Contact Me</Link>
        </div>
      </div>
    </section>
  )
}

export default Projects;