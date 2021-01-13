/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

  
const path = require("path")
const {paginate} = require('gatsby-awesome-pagination')

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const result = await graphql(`
    {
      infographics: allStrapiInfographics {
        nodes {
          id
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
    itemsPerPage:12,
    pathPrefix:'/Infographics',
    component: path.resolve(`src/pageTemplate/PaginationInfographicsTemplate.js`)
  })

  result.data.infographics.nodes.forEach(infographics => {
    createPage({
      path: `/Infographics/${infographics.Title}`,
      component: path.resolve(`src/pageTemplate/InfographicTemplate.js`),
      context: {
        title: infographics.Title,
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

const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
exports.onCreateNode = async ({
 node,
 actions,
 store,
 cache,
 createNodeId,
}) => {
const { createNode } = actions

// replace ".sliderHome" for the name of multiple media in Strapi CMS
let sliderImages = node.infographics

// replace “StrapiHome” for your node type

if (node.internal.type === "strapiInfographics") {
  if (sliderImages.length > 0) {
    // sliderImages.forEach(el => console.log(el))
    const images = await Promise.all(
      sliderImages.map(el =>
        createRemoteFileNode({
          url: `http://167.205.57.47:1337${el.url}`,
          parentNodeId: node.id,
          store,
          cache,
          createNode,
          createNodeId,
        })
       )
     )

    sliderImages.forEach((image, i) => {
      image.localFile___NODE = images[i].id
    })
   }
 }
}

// exports.onCreateNode = async ({
//   node,
//   actions,
//   store,
//   cache,
//   createNodeId,
// }) => {
//   const { createNode } = actions
  
// let infographics = node.images

//   if (node.internal.type === "strapiInfographics") {
//     if (infographics.length > 0) {
//       infographics.forEach(el => console.log(el))
//       const images = await Promise.all(
//         infographics.map(el =>
//           createRemoteFileNode({
//             url: `http://167.205.57.47:1337/${el.url}`,
//             parentNodeId: node.id,
//             store,
//             cache,
//             createNode,
//             createNodeId,
//           })
//         )
//       )
   
//      infographics.forEach((image, i) => {
//         image.localFile___NODE = images[i].id
//       })
//     }
//   }
// }