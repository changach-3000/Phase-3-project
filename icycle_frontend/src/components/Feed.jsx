import React, { useContext, useState } from 'react'
import { PostContext } from '../context/PostProvider'
import { NavLink, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'



function Feed() {
  const {posts}= useContext(PostContext)
  const {handleDelete,editPost} = useContext(PostContext)
  const {currentuser}= useContext(AuthContext)

  return (
    <>
    <h1 style={{"fontWeight":"lighter","textAlign":"center","fontSize":"30pt"}}>MY FEED</h1>
<div className='container my-5'>
  <div className='row'>
  {
          posts && posts.map((post)=>( 
           
            <div class="card-deck overflow-hidden mb-3" style={{"max-width": "540px;"}}>
              <div class="row g-5">
                <div class="col-md-4">
                  <img src={post.image_url} class="img-fluid rounded"/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 style={{fontWeight:'lighter',fontSize:'20px'}}>{post.title}</h5>
                      <p>{post.description}</p>
                      <div className='details'>
                      <p className='me-2'>Distance: {post.distance}</p>
                      <p>Time: {post.time}</p>
                      </div>
                      <p className='text-body-secondary'>Created By: {post.user.username}</p>
                      {
                        currentuser && currentuser.username === post.user.username?
                        <>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <NavLink to={`editpost/{$id}`}><button type="button" class="btn btn-outline-warning">Edit</button></NavLink>
                        <button type="button" class="btn btn-outline-danger" onClick={()=>{handleDelete(post.id)}}>Delete </button>
                        </div>   
                        </>:" "
                      }
                     
                  </div>
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

export default Feed