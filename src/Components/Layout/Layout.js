import React from 'react'
import Nav from '../../Containers/Nav/Nav'
import MenuBtn from '../MenuBtn/MenuBtn'
import './Layout.css'

const layout = (props) => (
  <div className="Layout">
    <Nav/>
    <MenuBtn/>
    <main>
      {props.children}
    </main>
  </div>
)

export default layout
