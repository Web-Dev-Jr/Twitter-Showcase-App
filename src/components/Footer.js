import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons"

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer style={{}}>
          <div className="footer-contact">
            <h1>SNAXMEDIA</h1>
            <h3>
              <FontAwesomeIcon icon={faPhone} />
              214-307-2738
            </h3>
            <h3>
              <FontAwesomeIcon icon={faEnvelope} />
              info@snaxmedia.com
            </h3>
            <h3>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              14675 Midway Rd. Suite 209
            </h3>
          </div>
          <div className="footer-services">
            <div className="testFooter">
              <h3>Video Production</h3>
              <div>
                <p>Our Work</p>
                <p>Our Work</p>
              </div>
            </div>
            <div>
              <h3>Website Design</h3>
              <div>
                <p>Design</p>
                <p>Development</p>
                <p>App Design</p>
              </div>
            </div>
            <div>
              <h3>Marketing</h3>
              <div>
                <p>SEO</p>
                <p>SEM</p>
                <p>Social Media</p>
                <p>Print</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

// © {new Date().getFullYear()}, Built by
// {` `}
// <a href="https://samkautzresume.dev/">WebDevSam</a>
