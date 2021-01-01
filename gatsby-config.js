const { resolve } = require(`path`)
const { platform } = require(`os`)

module.exports = {
  siteMetadata: {
    title: `Data KM ITB`,
    description: `Website data KM ITB`,
    author: `@gatsbyjs`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-material-ui`,
    //   options: {
    //     pathToStylesProvider: `src\pages\Admin\Listdata.js`,
    //   },
    // },

    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,

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
        queryLimit: 1000,
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

    // {
    //   resolve: `gatsby-transformer-video`,
    //   options: {
    //     /**
    //      * Set if FFMPEG & FFPROBE should be downloaded if they are not found locally.
    //      *
    //      * Downloaded binaries are stored in `node_modules/.cache/gatsby-transformer-video-bins/`
    //      *
    //      * Default: true
    //      */
    //     downloadBinaries: false,
    //     /**
    //      * Optional: Pass your own binaries
    //      *
    //      * Assumes you store your binaries in the following pattern:
    //      * ./bin/darwin/ffmpeg
    //      * ./bin/darwin/ffprobe
    //      * ./bin/linux/ffmpeg
    //      * ./bin/linux/ffprobe
    //      * ...
    //      *
    //      * Default: null
    //      */
    //     ffmpegPath: resolve(__dirname, "bin", platform(), "ffmpeg"),
    //     ffprobePath: resolve(__dirname, "bin", platform(), "ffprobe"),

    //     // Optional profiles for full fluent-ffmpeg access
    //     profiles: {
    //       sepia: {
    //         extension: `mp4`,
    //         converter: function ({ ffmpegSession, videoStreamMetadata }) {
    //           // Example:
    //           // https://github.com/gatsbyjs/gatsby/blob/gatsby-transformer-video/examples/using-gatsby-transformer-video/gatsby-config.js
    //         },
    //       },
    //     },
    //   },
    // },

    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
