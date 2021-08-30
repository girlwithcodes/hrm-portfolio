import { Route } from 'react-router-dom';
import Welcome from './Components/Welcome/Welcome';
import AboutMe from './Components/AboutMe/AboutMe';
import Skills from './Components/Skills/Skills';
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
        
      </Route>

      <Route path="/contact">
        
      </Route>

    </div>
  );
}

export default App;
