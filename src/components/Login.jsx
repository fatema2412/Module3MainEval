import axios from 'axios'
import React, { useContext } from 'react'
import { useState } from 'react'
import {UserAuth} from "../ContextProvider/ContextProvider"
const initalObj={username:"",password:""}
export default function Login() {
    const [form,setForm]=useState(initalObj)
      const {login}=useContext(UserAuth)

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("https://hungry-lace-silverfish.glitch.me/login",form)
    .then((res)=>{
      login(res.data.token)
      console.log(form)
    })
      .catch((err)=>console.log(err))



    }
    const handleChange=(e)=>{
        const {name,value}=e.target
        setForm({...form,[name]:value})
        console.log(form)
    }
  return (
    <div>
        <form onSubmit={(e)=>(handleSubmit(e))}>
      <input type="text" onChange={(e)=>(handleChange(e))} name="username" value={form.username} placeholder='Enter your Name'/>
      <input type="password" onChange={(e)=>(handleChange(e))} name="password" value={form.password} placeholder='Enter Password'/>
      <input type="submit" value="LogIn"/>
      </form>
    </div>
  )
}
