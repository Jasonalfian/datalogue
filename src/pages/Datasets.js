import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import NavbarDark from "../components/Globals/NavbarDark"
import SEO from "../components/seo"
import DatasetsFull from "../components/Datasets/DatasetsFull"
import SearchDatasets from "../components/Datasets/SearchDatasets"
import Kontak from "../components/Datasets/Kontak"

export default ({data}) => {

  const {
    allStrapiCategories: {nodes: Categories},
  } = data
  
  return(
  <Layout>
    <NavbarDark/>
    <SEO title="Home" />
    <SearchDatasets/>
    <DatasetsFull categories={Categories}/>
    <Kontak/>
  </Layout>
  )
}

// export default DatasetsPage

export const query = graphql`
query {
  allStrapiCategories(sort: {fields: Name, order: ASC}) {
    nodes {
      id
      Name
      logodark {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
}`