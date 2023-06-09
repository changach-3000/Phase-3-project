import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
export const RouteContext = createContext()

export function RouteProvider({children}){
  // create route state
  const [routes ,setRoutes] = useState()
  const nav = useNavigate()

  function addRoute(name,description,distance,time,level_of_difficulty){
    fetch("https://icycle-np02.onrender.com/routes/addroute",{
        method: "POST",
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({name, description,distance,time,level_of_difficulty})
    })
    .then(res => res.json())
    .then((data) =>{

        if(data.success){
            alert(data.success)
            nav("/routes")
            window.location.reload()
        }else if(data.error){
            alert(data.error)
        }else{
            alert("All fields are required")
        }
    })
   
  }

  // Delete a Route
  function handleDelete(id){
    fetch(`https://icycle-np02.onrender.com/routes/delete/${id}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }, 
    })
    nav("/routes")
    window.location.reload()
  }

  // fetch the data from the routes in the backend
  useEffect(()=>{
    fetch("https://icycle-np02.onrender.com/routes")
    .then(res => res.json())
    .then(data =>{
      setRoutes(data)
    })
  },[])
    
    const contextData = {
      routes,
      addRoute,
      handleDelete,

    }
  return (
    <div>
        <RouteContext.Provider value = {contextData} >
            {children}
        </RouteContext.Provider>
    </div>
  )
}
