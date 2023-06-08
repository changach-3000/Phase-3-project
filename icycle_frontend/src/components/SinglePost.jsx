import React, { useContext } from 'react'
import { PostContext } from '../context/PostProvider'
import { NavLink} from 'react-router-dom'

function SinglePost() {

    const {singlepost} = useContext(PostContext)
    return(
     <div>  
         <div>
        {
          <div key={singlepost && singlepost.id}>
            <div className='bg-details'> 
            <h5> {singlepost && singlepost.title}</h5>
            <p>{singlepost && singlepost.description}</p>
            <div className='details'>
            <p>{singlepost && singlepost.distance}</p>
            <p>{singlepost && singlepost.time}</p>
            </div>
            <p className='text-body-secondary'>{singlepost && singlepost.updated_at}</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
               <NavLink to="editroute"><button type="button" class="btn btn-outline-warning">Edit</button>
               </NavLink>
               <button type="button" class="btn btn-outline-danger">Delete </button>
              </div>
          </div>
         
          </div>
         
          }
   </div>
     </div>
    )
}

export default SinglePost