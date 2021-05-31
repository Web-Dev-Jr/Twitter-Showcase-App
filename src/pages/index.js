import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from "../components/Navbar"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1
      styles={{
        color: "white",
      }}
    >
      More Randomness
    </h1>
  </Layout>
)

export default IndexPage
