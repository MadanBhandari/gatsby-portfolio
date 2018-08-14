module.exports = {
  siteMetadata: {
    title: 'Madan Bhandari',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
    'gatsby-plugin-sharp',
    {
    resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Madan Bhandari",
        short_name: "MB",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#6200EE",
        display: "minimal-ui",
        icon: "./src/images/logo.png",
      },
    }
  ],
}
