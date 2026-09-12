import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

       
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight hover:text-blue-100 transition"
        >
          📚 Study Planner
        </Link>

        
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="font-medium hover:text-blue-100 transition"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className="font-medium hover:text-blue-100 transition"
          >
            Dashboard
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Nav