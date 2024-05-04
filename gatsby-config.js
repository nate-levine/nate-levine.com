/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Nate Levine",
    siteUrl: `https://nate-levine.com`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `articles`,
          path: `${__dirname}/articles`
        },
    },
    "gatsby-plugin-mdx",
  ],
}