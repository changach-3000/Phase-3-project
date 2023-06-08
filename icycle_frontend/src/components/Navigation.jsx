import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function Navigation() {

  const {currentuser,logout}= useContext(AuthContext)

  return (
  <div>
  <nav className="navbar navbar-expand-lg">
    <div className="container">
      <Link to="/" className="navbar-brand fw-bold" >iCycle</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
        { currentuser && currentuser?
          <>
          <li className="nav-item">
            <Link to="feed" className="nav-link active" >Feed</Link>
          </li>
          <li className="nav-item">
            <Link to="routes" className="nav-link active" >Routes</Link>
          </li>
          <li className="nav-item">
            <Link to="addpost" className="nav-link active" >Add Post</Link>
          </li>

            
          <li className="nav-item">
            <Link to="addroute" className="nav-link active" >Add Route</Link>
          </li>
    

          <li className="nav-item dropdown">
            <Link to="/profile" className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Profile
            </Link>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item"><img src="https://img.icons8.com/color-glass/48/test-account.png"/>{currentuser && currentuser.username}</a></li>
              <li><Link to="/profile" className="dropdown-item"> Profile</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" onClick={()=>logout()}>Logout</a></li>
            </ul>
          </li>
         </>: " "
         }
        </ul>
      </div>
    </div>
  </nav>
  </div>
    )
  }
  
export default Navigation