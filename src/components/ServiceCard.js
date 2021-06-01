import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faVideo,
  faFlask,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons"

export default class ServiceCard extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <FontAwesomeIcon icon={faVideo} />
        </h1>
        <h2>Video Production</h2>
        <p>
          Captivating video is a great way to inform, communicate, and sell.
        </p>
      </div>
    )
  }
}
