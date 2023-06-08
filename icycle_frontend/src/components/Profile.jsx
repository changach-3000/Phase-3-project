import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function Profile() {
  const {currentuser}= useContext(AuthContext)
  return (
    <div> 

      <div class="container my-5">
                <div class="row">
                    <div class="col-md-2">
                        <div class="profile-img">
                            <img src="https://img.icons8.com/doodle/96/user-female-skin-type-5--v1.png" alt=""/>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="profile-head">
                                    <h5>
                                        {currentuser && currentuser.username}
                                    </h5>
                                    <h6>
                                    {currentuser && currentuser.email}
                                    </h6>
                                  
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="submit" class="btn btn-outline-success" value="Edit Profile"/>
                    </div>
                </div>
                     
        </div>

        <main class="main-container mb-3">  
            <div class="main-title mb-3">
                <p style={{"textAlign":"center"}}>USER DASHBOARD</p>
            </div>
            <div class="main-cards">
            <div className='row'>
              <div className="col-md-1">

              </div>
                <div class="card col-md-3 me-3">
                    <div class="card-inner">
                        <p class="text-primary">DISTANCES COVERED</p>
                        <span class="material-icons-outlined text-blue">directions_bike</span>
                    </div>
                    <span class="text-primary font-weight-bold">80km</span>
                </div>
                <div class="card col-md-3 me-3">
                    <div class="card-inner">
                        <p class="text-primary">AVERAGE TIME CYCLING</p>
                        <span class="material-icons-outlined text-orange">timer</span>
                    </div>
                    <span class="text-primary font-weight-bold">20hrs</span>
                </div>
                <div class="card col-md-3 me-3">
                    <div class="card-inner">
                        <p class="text-primary">POSTS</p>
                        <span class="material-icons-outlined text-green">add_a_photo</span>
                    </div>
                    <span class="text-primary font-weight-bold">12</span>
                </div>
                </div>
            </div>
        </main>
       </div>
  )
}

export default Profile