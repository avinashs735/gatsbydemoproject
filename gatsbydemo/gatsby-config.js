module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [{
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/css_file`,
      name: "posts",
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },'gatsby-plugin-react-helmet',
  ],
  
  pathPrefix: `/gatsbydemo`



};
