import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faVideo,
  faFlask,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons"

import ServiceCard from "../components/ServiceCard"
import LightBtn from "../components/LightBtn"

export default class Header extends React.Component {
  render() {
    return (
      <header
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            paddingTop: "120px",
            textAlign: "center",
            color: "white",
          }}
        >
          <h1
            style={{
              marginTop: "200px",
              fontSize: "84px",
              fontFamily: "Montserrat-bold",
              color: "white",
            }}
          >
            Need Some SNAX?
          </h1>
          <p
            style={{
              fontSize: "18px",
              fontFamily: "Montserrat",
              color: "white",
            }}
          >
            SNAX Media is a full-service digital media agency specializing in
            video production, website design, and digital marketing.
          </p>
          <div className="header-service-option-cards">
            <div id="something">
              <h1>
                <FontAwesomeIcon icon={faVideo} />
              </h1>
              <h2>Video Production</h2>
              <p>
                Captivating video is a great way to inform, communicate, and
                sell.
              </p>
            </div>
            <div id="something">
              <h1>
                <FontAwesomeIcon icon={faFlask} />
              </h1>
              <h2>Video Production</h2>
              <p>
                Captivating video is a great way to inform, communicate, and
                sell.
              </p>
            </div>
            <div id="something">
              <h1>
                <FontAwesomeIcon icon={faChartLine} />
              </h1>
              <h2>Video Production</h2>
              <p>
                Captivating video is a great way to inform, communicate, and
                sell.
              </p>
            </div>
          </div>
          <LightBtn />
        </div>
      </header>
    )
  }
}
