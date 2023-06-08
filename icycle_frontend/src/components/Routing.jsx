import React, { useContext } from 'react'
import { RouteContext } from '../context/RouteContext'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


function Routing() {
  const {routes}= useContext(RouteContext)
  const {handleDelete} = useContext(RouteContext)
  const {currentuser}= useContext(AuthContext)

  return (
    <>
<h1 style={{"fontWeight":"lighter","textAlign":"center","fontSize":"30pt"}}>AVAILABLE ROUTES</h1>

<div className='container my-5 mx-auto'>
  <div className='row'>
  {
          routes && routes.map((route)=>( 
            <div class="card-deck overflow-hidden mb-4 border" style={{"max-width": "540px;"}}>
              <div class="row g-5">
                <div class="col-md-3 "style={{ "background-color": "#004D20"}}>
                 
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 style={{fontWeight:'lighter',fontSize:'20px'}}>{route.name}</h5>
                      <p>{route.description}</p>
                      <div className='details'>
                      <p className='me-2'>Distance: {route.distance}</p>
                      <p className="me-3">Time: {route.time}</p>
                      <p>Level Of Difficulty: {route.level_of_difficulty}</p>
                      </div>
                      {currentuser && currentuser.is_admin === route.is_admin == true ?
                        <>
                         <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" class="btn btn-outline-warning">Edit</button>
                        <button type="button" class="btn btn-outline-danger" onClick={()=>{handleDelete(route.id)}}>Delete </button>
                        </div>   
                        </>:" "
                      }             
                     
                  </div>
                </div>
                <div class="col-md-1"style={{ "background-color": "#d9e0f9" }}>
                 
                </div>
              </div>
            </div>

          ))
  }
</div>
</div>
</>
  )
}

export default Routing