import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

function Login() {

    const {login}= useContext(AuthContext)

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
       e.preventDefault()
       login(username, password)
       setPassword("")
       setUsername("")
    }

  return (
    <div>
        {/*  Login Start  */}
        <div class="form-area my-5">
        <div class="container">
            <div class="row single-form g-0">
                <div class="col-sm-12 col-lg-6">
                    <div class="left">
                        <h2>Log In</h2>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-6">
                    <div class="right1">
                       <i class="fa fa-caret-left"></i>
                        <form onSubmit={handleSubmit}>
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Enter Userame</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e)=> setUsername(e.target.value)}/>
                          </div>
                          <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Enter Password</label>
                              <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=> setPassword(e.target.value)}></input>
                          </div>
                          <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  Contact End */}
    </div>
  )
}

export default Login