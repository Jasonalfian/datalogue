import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import NavbarDark from "../components/Globals/NavbarDark"
import OneDataset from '../components/Datasets/oneDataset'
import OneDatasetEmpty from '../components/Datasets/OneDatasetEmpty'
import LembagaHead from '../components/Datasets/lembagaHead'

const DatasetPage = ({ data }) => {

    const category = data.strapiCategories
    const dataset = data.datasets.nodes

    console.log(dataset.length)

    if (dataset.length === 0) {
        return ( <
            Layout >
            <
            NavbarDark / >
            <
            LembagaHead category = { category }
            /> <
            OneDatasetEmpty / >
            <
            /Layout>
        )
    } else {
        return ( <
            Layout >
            <
            NavbarDark / >
            <
            LembagaHead category = { category }
            /> <
            OneDataset dataset = { dataset }
            /> <
            /Layout>
        )
    }
}

export const query = graphql `
  query 
  getAllDatasets ($name: String) {
    datasets: 
    allStrapiSubCategories(filter: {categories: {elemMatch: {Name: {eq: $name}}}}) {
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
    strapiCategories(Name: {eq: $name}) {
      id
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





// `
//   query 
//   getAllDatasets ($name: String) {
//     datasets: 

//     strapiCategories(Name: {eq: $name}) {
//       Name
//       logowhite {
//         childImageSharp {
//           fluid (maxWidth: 600, maxHeight: 600) {
//             ...GatsbyImageSharpFluid_tracedSVG
//           }
//         }
//       }
//     }
//   }
//   `

// query 
// getAllDatasets($name: String) {
//   datasets: 
//   allStrapiSubCategories(filter: {category: {Name: {eq: $name}}}) {
//     nodes {
//       id
//       Name
//       dataests {
//         Name
//         Link
//         id
//         created_at
//         Author
//       }
//       category {
//         Name
//         logodark {
//           childImageSharp {
//             fluid {
//               base64
//               tracedSVG
//               srcWebp
//               srcSetWebp
//               originalImg
//               originalName
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `

export default DatasetPage