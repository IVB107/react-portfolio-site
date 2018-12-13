import React, { Component } from 'react'
import SkillContainer from './SkillContainer/SkillContainer'
import 'devicon/devicon.min.css'
import './Skills.css'

class Skills extends Component {

  render(){
    return (
      <div className="Skills">
        <p>– My Kit –</p>
        <div className="Filters">
          <ul className="Dropdown">
            <li><button className={this.props.filter === 'all' ? "Active" : ""} onClick={() => this.props.sortBy('all')}>All</button></li>
            <li><button className={this.props.filter === 'tech' ? "Active" : ""} onClick={() => this.props.sortBy('tech')}>Tech</button></li>
            <li><button className={this.props.filter === 'tool' ? "Active" : ""} onClick={() => this.props.sortBy('tool')}>Tools</button></li>
          </ul>
        </div>
        <div className="SkillContainer">
          <SkillContainer
            filter={this.props.filter}
            skills={this.props.skills}
          />
        </div>
      </div>
    )
  }
}

export default Skills
