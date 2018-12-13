import React from 'react'
import './About.css'
import headshot_sm from '../../../Images/headshot_sm.jpg'

const about = (props) => (
  <div className="About">
    <p className="Title">– About –</p>
    <div className="ImageContainer">
      <img className="Headshot" src={headshot_sm} alt="Ian Van Buren"/>
    </div>
    <div className="TextContainer">
      <p className="Text">I'm a front-end JavaScript developer who is dedicated to learning and becoming a full-stack web developer. My journey of learning to code began at the start of 2017 when I chose to make programming a daily practice; I signed up for FreeCodeCamp's online bootcamp and there was no turning back. Uncertain whether I'd sink or swim, diving into the ocean of programming is still the scariest and best decision I've ever made.</p>
      <p className="Text">Now that I've discovered my passion for writing software, my commitment to both personal and professional growth is what motivates me most. I very much look forward to gaining valuable experience with various technologies like mobile development, blockchain, data science, and machine learning. I'm excited for failures I'll endure, challenges I'll overcome and opportunities to work with people who encourage my eagerness to learn to write quality code. Whatever path I take, I'll persist and push myself until I've achieved my goal.</p>
    </div>
  </div>
)

export default about
