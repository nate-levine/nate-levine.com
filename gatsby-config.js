/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Nate Levine",
    description: "A place to share my ideas, interests, and thoughts on topics ranging from engineering, to software development, to food science.",
    url: `https://www.nate-levine.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Nate Levine",
        short_name: "Nate Levine",
        start_url: "/",
        background_color: "#fbf1c7",
        theme_color: "#fbf1c7",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    'gatsby-plugin-postcss',
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `articles`,
        path: `${__dirname}/articles`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    // Inline images
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              withWebp: true,
              showCaptions: true,
              quality: 100,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
}