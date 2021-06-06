import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const random = () => (
  <Layout>
    <Seo title="Random Tweets" />
    <h1>Hi from the random tweet page</h1>
    <p>Check out these random Tweets</p>
  </Layout>
)

export default random
