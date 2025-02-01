import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate=useNavigate()
  return (
    <div>
      <h2>Welcome to the Quiz App!</h2>
      <h3>Test youR knowledge Please <span><button onClick={()=>(navigate("/Login"))}>Login</button></span>to get started</h3>
    </div>
  )
}
