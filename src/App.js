import logo from './logo.svg';
import './App.css';
import About from './components/about/About';
import Navbar from './components/navbar/navbar';
import Experiences from './components/experiences/Experiences';
import Projects from './components/projects/Projects';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Experiences />
      <Projects />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
