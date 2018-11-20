import React, { Component } from 'react'
import Home from './Home/Home'
import Work from './Work/Work'
import Skills from './Skills/Skills'
import About from './About/About'
import Contact from './Contact/Contact'
import './Main.css'

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      pageLoaded: false,
      skills: {
        tech: [
          {name: 'HTML'}, {name: 'CSS'}, {name: 'JavaScript'}, {name: 'Express.js'}, {name: 'jQuery'}, {name: 'Node.js'}, {name: 'C'}, {name: 'Python'}, {name: 'git'} ],
        tools: [
          {name: 'GitHub'}, {name: 'npm'}, {name: 'Flexbox'}, {name: 'Bootstrap'}, {name: 'RESTful APIs'}, {name: 'Slack'}, {name: 'Codepen'}, {name: 'Terminal'}, {name: 'Babel'}
          ]
      }
    }
  }

  render() {
    return (
      <div className="Main">
        <Home/>
        <Work/>
        <Skills
          skills={this.state.skills}
        />
        <About/>
        <Contact/>
      </div>
    )
  }
}

export default Main
