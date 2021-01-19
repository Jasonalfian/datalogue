const { resolve } = require(`path`)
const { platform } = require(`os`)

module.exports = {
  siteMetadata: {
    title: `Data KM ITB`,
    description: `Website data KM ITB`,
    author: `@gatsbyjs`,
  },
  plugins: [
  
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,

    {
      resolve: 'gatsby-plugin-local-search',
      options: {
          name: 'pages',
          engine: 'flexsearch',
          query: `query {
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
                      aspectRatio
                      sizes
                      src
                      srcSet
                      tracedSVG
                    }
                  }
                }
              }
            }
          }
          `,
          ref: `id`,
          index: [
            'Title',
            'CardDescription'],
          store: [
            `id`,
            'Title',
            'CardDescription',
            `fluid`
          ],
          normalizer: ({data}) => 
            data.allStrapiInfographics.nodes.map(node => ({
              id: node.id,
              Title: node.Title,
              CardDescription: node.CardDescription,
              fluid: node.coverCard.childImageSharp.fluid
            }))
          ,
      }
  },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://167.205.57.47:1337',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'infographics',
          'categories',
          'sub-categories',
          'dataests',
          'kolaborasi',
        ],
        queryLimit: 10000,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },

    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
      }
    }
  ],
}
