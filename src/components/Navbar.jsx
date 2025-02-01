import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/result">Result</Link>
      </nav>
    </div>
  )
}
