import React, {Component} from 'react'
import Navbar from "./components/navbar/navbar";
import CourseList from './components/courseList/index';
import Particles from "react-particles-js";
import logo from './logo.jpg';
import './App.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";



// Particles.js setup
const options = {
   
      particles: {
        number: {
          value: 500,
          density: {
            enable: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            speed: 2,
            size_min: 0.3,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          random: true,
          speed: 1,
          direction: "top",
          out_mode: "out",
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "bubble",
          },
          onclick: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          bubble: {
            distance: 250,
            duration: 2,
            size: 0,
            opacity: 0,
          },
          repulse: {
            distance: 200,
            duration: 2,
          },
        },
      },
    }


  


class App extends Component{
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Particles className="particles" params={options} />
        <CourseList />
      </React.Fragment>
    );
}
}

export default App;
