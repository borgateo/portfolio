import React from 'react'
import { withSiteData, Link } from 'react-static'
//
// import logoImg from '../logo.png'
// <img src={logoImg} alt="" style={{ display: 'block', margin: '0 auto' }} />

export default withSiteData(() => (
  <header id="intro">
    <h1>
      Hi! I՚m <Link to="/about" className="underscore">Matt Borgato</Link><br/>
      Software Engineer at {''}
      <a href="https://invisionapp.com" className="underscore" target="_blank" rel="noopener noreferrer">InVision</a>
    </h1>
  </header>
))
