import * as React from "react"
import { Link } from "gatsby"
import * as styles from "../components/styles/page2.module.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <div className={styles.random}>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
    </div>
  </Layout>
)

export default SecondPage
