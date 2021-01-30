import React from "react"
import {graphql } from "gatsby"

import Layout from "../components/layout"
import NavbarDark from "../components/Globals/NavbarDark"
import OneDataset from '../components/Datasets/oneDataset'
import OneDatasetEmpty from '../components/Datasets/OneDatasetEmpty'
import LembagaHead from '../components/Datasets/lembagaHead'

const DatasetPage = ({ data }) => {

    const category = data.strapiCategories
    const dataset = data.datasets.nodes

    if (dataset.length === 0) {
        return ( < Layout >
            <NavbarDark/>
            <LembagaHead category = { category }
            /> <OneDatasetEmpty/>
            </Layout>
        )
    } else {
        return ( <Layout>
            <NavbarDark/>
            <LembagaHead category = { category }
            /> <OneDataset dataset = { dataset }
            /> </Layout>
        )
    }
}

export const query = graphql `
  query 
  getAllDatasets ($uid: String) {
    datasets: 
    allStrapiSubCategories(filter: {categories: {elemMatch: {uid: {eq: $uid}}}}) {
      nodes {
        id
        Name
        shortDescription
        dataests {
          id
          Name
          Author
          publishedDate
          Link
        }
      }
    }
    strapiCategories(uid: {eq: $uid}) {
      id
      uid
      Name
      shortDescription
      logowhite {
        childImageSharp {
          fluid (maxWidth: 600, maxHeight: 600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
}  
`

export default DatasetPage