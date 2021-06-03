import React, { Component } from "react"
import LightBtn from "../components/LightBtn"

function ImgTextCard() {
  return (
    <div className="img-text-card">
      <div>
        <iframe
          height="100%"
          width="100%"
          src="https://www.youtube.com/embed?v=0x6-9g8HdZk"
          frameborder="1"
          allow="autoplay encrypted-media"
          title="Snax Media Marketing and Video Production | Dallas, TX"
        />
      </div>
      <div>
        <h1>Project Inquiry</h1>
        <p>
          Let us know a little bit about your business, what kind of project you
          have in mind, and we will get back to you to set up a call or
          face-to-face meeting to learn more about you and your business and
          discuss in more detail how we can help you.
        </p>
        <LightBtn />
      </div>
    </div>
  )
}

export default ImgTextCard
