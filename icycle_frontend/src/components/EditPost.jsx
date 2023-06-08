import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PostContext } from "../context/PostProvider";


function EditItem() {
  const {editPost, addPost} = useContext(PostContext);
  const{id}=useParams()
  

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [image_url, setImageUrl] = useState('');

  function handleEditPost(e) {
    e.preventDefault();
    editPost(title, description, distance, time, image_url);
  }

  return (
    <div>
    {/* create a form for adding a new post */}
    {/*  Login Start  */}
    <div class="form-area my-5">
      <div class="container">
        <div class="row single-form g-0">
          <div class="col-sm-12 col-lg-6">
            <div class="left">
              <h2>Share your Experience!</h2>
            </div>
          </div>
          <div class="col-sm-12 col-lg-6">
            <div class="right1">
              <i class="fa fa-caret-left"></i>
              <form onClick={handleEditPost}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">My Title</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">How do you feel about your session today?</label>
                  <textarea type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">What distance did you cover today?</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => setDistance(e.target.value)}></input>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">How long did you cycle today?</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => setTime(e.target.value)}></input>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Share an image</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => setImageUrl(e.target.value)}></input>
                </div>
               
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
   
  )
}

export default EditItem;
