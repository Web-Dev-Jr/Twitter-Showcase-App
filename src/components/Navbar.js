import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav>
      <div className="links">
        <Link
          style={{
            color: `black`,
            textDecoration: `none`,
            margin: "10px",
          }}
          to="/"
        >
          Home
        </Link>
        <Link
          style={{
            color: `black`,
            textDecoration: `none`,
            margin: "10px",
          }}
          to="/page-2"
        >
          Search
        </Link>
        <Link
          style={{
            color: `black`,
            textDecoration: `none`,
            margin: "10px",
          }}
          to="/random"
        >
          Random Tweets
        </Link>
      </div>
    </nav>
  )
}
