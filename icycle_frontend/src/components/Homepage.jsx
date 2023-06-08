import React from 'react'
import Counter from './Counter'
import { NavLink } from 'react-router-dom'


function Homepage() {
  return (
    <div>
          {/* Hero section */}
      <div className='hero-section'>
     <div class="container col-xxl-8 px-4  my-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <div class="blob"></div>
      </div>
      <div class="col-lg-6">
        <p class="lead fw-lighter">Get the  <span id='hero'>Best</span>Cycling Experience!</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
         <NavLink to="register" > <button to="register" type="button" class="btn btn-outline-success btn-lg px-4 me-md-2">Sign Up</button></NavLink>
          <NavLink to="login"><button type="button" class="btn btn-outline-success btn-lg px-4">Log In </button></NavLink>
        </div>
      </div>
    </div>
  </div>
  </div>
  {/* end of hero section */}

  <Counter />

   {/* Content */}
   <main className='about-main'>
    <div class="row g-5 mx-5 my-5">
      <div class="col-md-3">
        <h2 class="fw-lighter" id='main-title'>WHAT WE DO</h2>
        <hr/>
        <p id='main-content'>iCYCLE offers a full range of services for cycling enthusiasts in offering route options and connecting with fellow cyclists </p>
      </div>
      <div class="col-md-3">
        <h2 class="fw-lighter"  id='main-title1'>Routing Options</h2>
        <p id='main-content'>Provides a wide range of route options for users including route descriptions as well as approximate distances, time and the level of difficulty </p>
        
      </div>

      <div class="col-md-3">
        <h2 class="fw-lighter" id='main-title1'>Community</h2>
        <p id='main-content'>We offer a sense of community for cyclists where users can interact through posts and see each other's progress and also view route reviews</p>
        
      </div>

      <div class="col-md-3" >
        <h2 class="fw-lighter" id='main-title1'>Tracking</h2>
        <p id='main-content'>Users will be able to keep track of their routes and the distances they have been able to cover</p>
        
      </div>
    </div>
  </main>
    {/* end of content */}
    </div>
  )
}

export default Homepage