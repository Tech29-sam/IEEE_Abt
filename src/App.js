import React, {Component} from 'react'
import Navbar from './components.js/Navbar'
import About from './components.js/About'
import Carousel from './components.js/Carousel'
import 'materialize-css/dist/css/materialize.min.css';
import './App.css'

class App extends Component{
  render() {
    return (
     <div className="App">
       <div className="top">
          <h1>ABOUT US</h1>
          <About />
       </div>
       <div className="title container">
          <h2>TECHNICAL TEAM</h2>
          <p class="Tech">It conducts coding workshops and competitions, while guiding executives in matters of live projects, problems and general technical guidance.</p>
          <Carousel />
          <h2>CORPORATE RELATIONS TEAM</h2>
          <p class="CR">The Corporate Relations Team is the facilitator of all corporate engagements. In addition to planning and executing a plethora of events throughout the year, the team is responsible for matching the right talent to the right organization.</p>
          <Carousel />
          <h2>PUBLIC RELATIONS TEAM</h2>
          <p class="PR">It promotes and creates awareness about the various events organized by the committee. It requires executives to come up with new ideas so as to publicize the events.</p>
          <Carousel />
          <h2>DIGITAL CREATIVES TEAM</h2>
          <p class="DC">In charge of coming up with innovative ideas and implementing them to make creative decorations and posters to attract students.</p>
          <Carousel />
       </div>
      </div>
    );
  }
}

export default App;
