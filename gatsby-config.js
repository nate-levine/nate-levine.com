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
          name: `blog`,
          path: `${__dirname}/blog`
        },
    },
    "gatsby-plugin-mdx",
  ],
}