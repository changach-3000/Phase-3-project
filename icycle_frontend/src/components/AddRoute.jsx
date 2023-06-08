import React, { useContext, useState } from 'react'
import { RouteContext } from '../context/RouteContext';

function AddRoute() {
    const { addRoute } = useContext(RouteContext);


    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [distance, setDistance] = useState('');
    const [time, setTime] = useState('');
    const [level_of_difficulty, setLevelOfDifficulty] = useState('');
    
  
    function handleAddRoute(e) {
      e.preventDefault();
      addRoute(name, description, distance, time, level_of_difficulty);
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
                  <h2>Add a new Route !!</h2>
                </div>
              </div>
              <div class="col-sm-12 col-lg-6">
                <div class="right1">
                  <i class="fa fa-caret-left"></i>
                  <form onSubmit={handleAddRoute}>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Name</label>
                      <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Route Description</label>
                      <textarea type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Approximate Distance</label>
                      <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => setDistance(e.target.value)}></input>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Approximate Time</label>
                      <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => setTime(e.target.value)}></input>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Level of difficulty</label>
                      <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => setLevelOfDifficulty(e.target.value)}></input>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
            </div>
            </div>
            </div>
    )}

export default AddRoute