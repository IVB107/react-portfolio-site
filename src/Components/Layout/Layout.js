import React from 'react'
import Nav from '../../Containers/Nav/Nav'
import './Layout.css'

const layout = (props) => (
  <div className="Layout">
    <Nav/>
    <main>
      {props.children}
    </main>
  </div>
)

export default layout
