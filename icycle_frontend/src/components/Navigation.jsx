import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <nav class="navbar navbar-expand-lg">
    <div class="container">
    <NavLink to='/' className='nav-link'>iCYCLE</NavLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav collapse navbar-collapse justify-content-end">
          <NavLink to="/" className="nav-link me-2">Home</NavLink>
          <NavLink to="feed" className="nav-link me-3" >About</NavLink>
          <NavLink to="routes" className="nav-link me-3" >Contact</NavLink>
          <NavLink to="profile" className="nav-link me-3" >Contact</NavLink>
        </div>
      </div>
    </div>
  </nav>
    
  )
}

export default Navigation