import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Navbar from "../components/Globals/Navbar"
import SEO from "../components/seo"
import Hero from "../components/Globals/Hero"
import Platform from "../components/Home/Platform"
import Kerjasama from "../components/Home/Kerjasama"
import Video from "../components/Home/VideoBG"
import Fact from "../components/Home/Fact"
import HomeSearch from "../components/Home/HomeSearch"
import logoGajah from "../images/gajhah putih 1.png"

const IndexPage = ({ data }) => (

<Layout>
    <Navbar/>
    <SEO title="Home" />
    <Video/>
    <Hero
      img={data.img2.childImageSharp.fluid}
      title=""
      content="yes"
      styleClass="background-2"
    />
    <Platform />
    <Fact />
    <HomeSearch />
    <Kerjasama data={data} />
    <Hero
      img={data.img3.childImageSharp.fluid}
      title="Kabinet Mahasiswa Institut Teknologi Bandung"
      content="no"
      styleClass="default-background"
      gambar={logoGajah}
      children={
        <a href="https://km.itb.ac.id/" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-tosca"> Lihat lebih lanjut </button>
        </a>
      }
    />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    img2: file(relativePath: { eq: "isi3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img3: file(relativePath: { eq: "image 1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    allStrapiKolaborasi {
      nodes {
        id
        logoLembaga {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`


