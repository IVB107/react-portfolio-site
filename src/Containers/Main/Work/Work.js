import React, { Component } from 'react'
import ProjectContainer from './ProjectContainer/ProjectContainer'
import './Work.css'

class Work extends Component {
  render() {
    return (
      <div className="Work">
        <p>– Work –</p>
        <div className="ProjectContainer">
          <ProjectContainer
          projects={this.props.projects}/>
        </div>
      </div>
    )
  }
}

export default Work
