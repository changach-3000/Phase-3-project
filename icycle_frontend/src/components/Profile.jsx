import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function Profile() {

  const {currentuser}= useContext(AuthContext)
  
  return (
    
       <div class="container my-5">
                <div class="row justify-content-center">
                    <div class="col-md-2">
                        <div class="profile-img">
                            <img src="https://img.icons8.com/doodle/96/user-female-skin-type-5--v1.png" alt=""/>
                        </div>
                    </div>
                   
                    <div class="col-md-3">
                    <h1>Welcome {currentuser && currentuser.username}</h1>
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
                

  )
}

export default Profile