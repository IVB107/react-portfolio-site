import React from 'react'
import SkillContainer from './SkillContainer/SkillContainer'
import 'devicon/devicon.min.css'
import './Skills.css'

const Skills = (props) => (

    <div className="Skills">
      <p>– My Kit –</p>
      <div className="Filters">
        <ul className="Dropdown">
          <li><button className={props.filter === 'all' ? "Active" : ""} onClick={() => props.sortBy('all')}>All</button></li>
          <li><button className={props.filter === 'tech' ? "Active" : ""} onClick={() => props.sortBy('tech')}>Tech</button></li>
          <li><button className={props.filter === 'tool' ? "Active" : ""} onClick={() => props.sortBy('tool')}>Tools</button></li>
        </ul>
      </div>
      <div className="SkillContainer">
        <SkillContainer
          filter={props.filter}
          skills={props.skills}
        />
      </div>
    </div>
)

export default Skills
