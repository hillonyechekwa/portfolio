/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: "Hill Onyechekwa",
    description: "add bio here",
    sites:{
      github: "hillonyechekwa",
      twitter: "thegridsmith",
      codepen: "hillonyechekwa"
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layouts/layout.js`),
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('autoprefixer')]
      }
    },
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: process.env.GCMS_ENDPOINT
      }
    }
  ],
}
