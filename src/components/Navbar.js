import { Link } from "gatsby"
import React from "react"

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link
          style={{
            fontSize: "38px",
            color: `white`,
            textDecoration: `none`,
            textDecoration: "none",
            float: "left",
            margin: "15px 0 10px 0",
            textAlign: "center",
            fontFamily: "Montserrat-Medium",
          }}
          to="/"
        >
          <strong>Snax</strong>Media
        </Link>
      </div>
      <div className="links">
        <Link
          style={{
            color: `white`,
            textDecoration: `none`,
            margin: "10px",
          }}
          to="/"
        >
          Home
        </Link>
        <Link
          style={{
            color: `white`,
            textDecoration: `none`,
            margin: "10px",
          }}
          to="/contact"
        >
          Our Work
        </Link>
        <Link
          style={{
            color: `white`,
            textDecoration: `none`,
            margin: "10px",
          }}
          to="/our-work"
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}
export default Navbar
