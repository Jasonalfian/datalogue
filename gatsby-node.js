/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

  
const path = require("path")
const {paginate} = require('gatsby-awesome-pagination')

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type strapiInfographic implements Node {
      infographic2: String
      infographic3: String
    }
  `
  createTypes(typeDefs)
}

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const result = await graphql(`
    {
      infographics: allStrapiInfographics {
        nodes {
          uid
          Title
        }
      }
    }
  `)

  const result2 = await graphql(`
    {
      categories: allStrapiCategories {
        nodes {
          Name
        }
      }
    }
  `)

  paginate({
    createPage,
    items: result.data.infographics.nodes,
    itemsPerPage:9,
    pathPrefix:'/Infographics',
    component: path.resolve(`src/pageTemplate/PaginationInfographicsTemplate.js`)
  })

  result.data.infographics.nodes.forEach(infographics => {
    createPage({
      path: `/Infographics/${infographics.uid}`,
      component: path.resolve(`src/pageTemplate/InfographicTemplate.js`),
      context: {
        uid: infographics.uid,
      },
    })
  })

  result2.data.categories.nodes.forEach(categories => {
    createPage({
      path: `/Datasets/${categories.Name}`,
      component: path.resolve(`src/pageTemplate/DatasetTemplate.js`),
      context: {
        name: categories.Name,
      },
    })
  })
}

