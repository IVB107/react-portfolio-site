import React, { Component } from 'react'
import Skill from './Skill/Skill'
import './Skills.css'

class Skills extends Component {
  render() {
    return (
      <div className="Skills">
        <p>– Skills –</p>
        <div className="Filters">
          <ul className="Dropdown">
            <li><button>All</button></li>
            <li><button>Tech</button></li>
            <li><button>Tools</button></li>
          </ul>
        </div>
        <div className="SkillContainer">
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
        </div>
      </div>
    )
  }
}

export default Skills
