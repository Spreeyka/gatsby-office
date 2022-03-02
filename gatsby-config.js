module.exports = {
  siteMetadata: {
    title: `Gatsby-office`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `e8f82d14467e075cdd5ad2eecca498`,
        preview: false,
        disableLiveReload: false,
      },
    },
  ],
};
