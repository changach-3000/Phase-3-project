import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

function Register() {

  const {signup} = useContext(AuthContext)

  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(username,email, password)
    setUsername(" ")
    setPassword("")
    setEmail("")
 }
  return (
    <div>
         {/*  Contact Start  */}
         <div class="form-area my-5">
        <div class="container">
            <div class="row single-form g-0">
                <div class="col-sm-12 col-lg-6">
                    <div class="left">
                        <h2>Sign Up Today </h2>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-6">
                    <div class="right1">
                       <i class="fa fa-caret-left"></i>
                        <form onSubmit={handleSubmit}>
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Enter Username</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e)=> setUsername(e.target.value)}/>
                          </div>
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Enter Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" onChange={(e)=> setEmail(e.target.value)}/>
                          </div>
                          <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Enter password</label>
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

export default Register