import React from "react"
import {graphql } from "gatsby"

import Layout from "../components/layout"
import NavbarDark from "../components/Globals/NavbarDark"
import SEO from "../components/seo"

import InfoFull from "../components/Infographics/InfoFull"
import SearchSection from "../components/Infographics/SearchSection"
import Pager from "../components/Globals/Pager"

export default ({data, pageContext}) => {

const {
  allStrapiInfographics: {nodes: Infographics},
} = data

return (
  <Layout>
    <NavbarDark/>
    <SEO title="Home" />
    <SearchSection />
    <InfoFull infographics={Infographics} />
    <Pager pageContext={pageContext}/>
  </Layout>
)
}

export const query = graphql`
query ($skip: Int!, $limit: Int!) {
  allStrapiInfographics (
    sort:{
      fields: [id]
      order: DESC
    }skip: $skip
    limit: $limit
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
    }
  }
}
`