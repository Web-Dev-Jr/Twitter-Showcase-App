import * as React from "react"
import { Link } from "gatsby"
import background from "../images/SNAX-Media-Banner.jpg"

export default class Header extends React.Component {
  render() {
    return (
      <header
        style={{
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
            textAlign: "center",
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <h1
                style={{
                  marginTop: "200px",
                  fontSize: "84px",
                  fontFamily: "Montserrat-bold",
                }}
              >
                Need Some SNAX?
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  fontFamily: "Montserrat",
                }}
              >
                SNAX Media is a full-service digital media agency specializing
                in video production, website design, and digital marketing.
              </p>
            </Link>
          </h1>
        </div>
      </header>
    )
  }
}
