import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Globals/Hero"
import {Link ,graphql} from "gatsby"

const NotFoundPage = ({data}) => (
  <Layout>
    <SEO title="404: Not found" />

    <Hero
      img={data.img3.childImageSharp.fluid}
        title="Laman yang anda cari tidak tersedia"
        content="no"
        styleClass="default-background"
        children={
          <Link to="/">
            <button className="btn btn-tosca"> Kembali ke Beranda </button>
          </Link>
}
/>


    {/* <h1>404: Not Found</h1> */}
    {/* <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
  </Layout>
)

export default NotFoundPage



export const query = graphql`
  query {
    img3: file(relativePath: { eq: "image 1.png" }) {
      childImageSharp {
        fluid {
        ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`