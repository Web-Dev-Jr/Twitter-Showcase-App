import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import DoubleTextCard from "../components/DoubleTextCard"
import ImgTextCard from "../components/ImgTextCard"
import ImageBanner from "../components/ImageBanner"

const IndexPage = () => (
  <Layout>
    <Header />
    <DoubleTextCard />
    <ImgTextCard />
    <h1
      style={{
        textAlign: "center",
        margin: "220px 0px 90px 0px",
      }}
    >
      Our Work
    </h1>
    <div className="img-banner">
      <ImageBanner />
    </div>
    <div className="img-banner-2">
      <ImageBanner />
    </div>
    <div className="img-banner-3">
      <ImageBanner />
    </div>
    <Seo title="Home" />
  </Layout>
)

export default IndexPage
