const path = require(`path`);
require('dotenv').config();
var proxy = require('http-proxy-middleware');

module.exports = {
  siteMetadata: {
    title: `dev.outotec.com`,
    description: ``,
    author: ``,
  },
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      }),
    );
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dev.outotec.com`,
        short_name: `dev.outotec.com`,
        start_url: `/`,
        background_color: `#009CD9`,
        theme_color: `#009CD9`,
        display: `minimal-ui`,
        icon: `src/images/outotec.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
