import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import NavbarDark from "../components/Globals/NavbarDark"
import SEO from "../components/seo"

import InfoFull from "../components/Infographics/InfoFull"
import SearchSection from "../components/Infographics/SearchSection"

export default ({data}) => {

const {
  allStrapiInfographics: {nodes: Infographics},
} = data

// console.log(data)
return (
  <Layout>
    <NavbarDark/>
    <SEO title="Home" />
    <SearchSection />
    <InfoFull infographics={Infographics} />
  </Layout>
)
}

export const query = graphql`
{
  allStrapiInfographics (
    sort:{
      fields: [id]
      order: DESC
    }
  ){
    nodes {
      id
      CardDescription
      Title
      coverCard {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      infographics {
        id
        url
        formats {
          medium {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
}
`