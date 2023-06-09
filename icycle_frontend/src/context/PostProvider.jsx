import { createContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

export const PostContext = createContext()

export function PostProvider({children}){
  const nav = useNavigate()
 
  
  // create route state

  const [posts ,setPosts] = useState()
  const [singlepost, setSinglepost] = useState(" ")

  function addPost(title, description,distance,time,image_url){
    fetch("https://icycle-np02.onrender.com/posts/addpost",{
        method: "POST",
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({title, description,distance,time,image_url})
    })
    .then(res => res.json())
    .then((data) =>{
        if(data.success){
            alert(data.success)
            nav("/feed")
            window.location.reload()
        }else if(data.error){
            alert(data.error)
        }
    })
    
  }

  // Edit Post
  function editPost(title, description, distance, time, image_url) {
    fetch(`https://icycle-np02.onrender.com/posts/editpost/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title:title,
        description: description,
        distance: distance,
        time: time,
        image_url: image_url
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert(data.success);
          nav("/feed")
          window.location.reload();
         }
      });
  }

 // Delete a Route
 function handleDelete(id){
  fetch(`https://icycle-np02.onrender.com/posts/delete/${id}`,{
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }, 
  })
  nav("/feed")
  window.location.reload()
}

  // fetch the data from the routes in the backend
  useEffect(()=>{
    fetch("https://icycle-np02.onrender.com/posts")
    .then(res => res.json())
    .then(data =>{
      setPosts(data)
    })
  },[])

  // fetch single post
  const {id} = useParams()
  useEffect(()=>{
    fetch(`https://icycle-np02.onrender.com/posts/${id}`)
    .then(res => res.json())
    .then(data =>{
      setSinglepost(data)
    })
  },[id])

    const contextData = {
        addPost,
        posts,
        handleDelete, 
        editPost,
        singlepost,

    }
  return (
    <div>
        <PostContext.Provider value = {contextData} >
            {children}
        </PostContext.Provider>
    </div>
  )
}
