import { Route } from 'react-router-dom';
import Welcome from './Components/Welcome/Welcome';
import AboutMe from './Components/AboutMe/AboutMe';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path ="/">
        <Welcome />
      </Route>

      <Route path="/about-me">
        <AboutMe />
      </Route>

      <Route path="/skills">
        <Skills />
      </Route>

      <Route path="/projects">
        <Projects />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

    </div>
  );
}

export default App;
