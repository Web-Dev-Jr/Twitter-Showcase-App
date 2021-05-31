import { Link } from "gatsby"
import React from "react"

export default class Navbar extends React.Component {
  render() {
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
              margin: "10px 0 10px 0",
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
            to="/page-2"
          >
            Search
          </Link>
          <Link
            style={{
              color: `white`,
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
}
