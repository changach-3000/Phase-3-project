import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
export const AuthContext = createContext()

export function AuthProvider({children}){

    // create state for current user
    const nav = useNavigate()

    const [onChange, setonChange] = useState(false)
    const [currentuser, setCurrentUser]= useState()

    // Login function
    const login = (username,password) => {
        fetch("/auth/login",{
            method: "POST",
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify({username,password})
        })
        .then(res => res.json())
        .then((response) =>{
            if (response.error){
                alert(response.error)
             }else if(response.success)
             {
            alert(response.success)
             }
             nav('feed')
        })
       
    }

    // Login function
    const signup = (username,email,password) => {
        fetch("/users/adduser",{
            method: "POST",
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify({username,email,password})
        })
        .then(res => res.json())
        .then((response) =>{
            if (response.error){
                alert(response.error)
             }else if(response.success)
             {
            alert(response.success)
             }
             nav('/')
        })
    }

     // Logout
     const logout = () =>{
        fetch("/auth/logout", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
        })
        .then(res=>res.json())
        .then(response => {
            if(response.success){
                alert(response.success)
            }
            nav("/login")
              setCurrentUser()
              setonChange(!onChange)
        })

    }

    // fetch current user
    useEffect(()=>{
        fetch("/currentuser",{
            method: "GET",
            headers: {"Content-Type": "application/json"}, 
        })
        .then(res => res.json())
        .then(data =>{
            if(data.user){
                setCurrentUser(data.user)
            } 
        })
    },[onChange])

    const contextData = {
        login,
        signup,
        currentuser,
        logout,

    }
  return (
    <div>
        <AuthContext.Provider value = {contextData} >
            {children}
        </AuthContext.Provider>
    </div>
  )
}

