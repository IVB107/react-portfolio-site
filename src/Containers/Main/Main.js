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
      // Devicon does not include: flexbox, npm, express.js, codepen, terminal
      skills:
        [ {name: 'html5', type: 'tech'}, {name: 'css3', type: 'tech'}, {name: 'javascript', type: 'tech'}, {name: 'jquery', type: 'tech'}, {name: 'nodejs', type: 'tech'}, {name: 'c', type: 'tech'}, {name: 'python', type: 'tech'}, {name: 'git', type: 'tech'}, {name: 'github', type: 'tool'}, {name: 'bootstrap', type: 'tool'}, {name: 'slack', type: 'tool'}, {name: 'babel', type: 'tool'} ],
      skillType: 'all'
    }
  }

  handleSortBy = (type) => {
    const prev = this.state.skillType
    if (prev !== type){
      this.setState({ skillType: type })
    }
  }

  render() {
    return (
      <div className="Main">
        <Home/>
        <Work/>
        <Skills
          filter={this.state.skillType}
          skills={this.state.skills}
          sortBy={this.handleSortBy}
        />
        <About/>
        <Contact/>
      </div>
    )
  }
}

export default Main
