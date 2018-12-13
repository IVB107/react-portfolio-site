import React, { Component } from 'react'
import './Contact.css'
import LinkContainer from './LinkContainer/LinkContainer'

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <p>– Contact –</p>
        <div className="LinkContainer">
          <LinkContainer
          links={this.props.links}
          />
        </div>
      </div>
    )
  }
}


export default Contact
