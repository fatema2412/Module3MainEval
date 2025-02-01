import React, { useContext } from 'react'
import{ UserAuth} from "../ContextProvider/ContextProvider"
import { useNavigate } from 'react-router-dom'
export default function PrivateRoute() {
    const {isAuth}=useContext(UserAuth)
    const navigate=useNavigate()
  if(isAuth){
    navigate("/quiz")
  }
  return navigate ("/login")
  
}
