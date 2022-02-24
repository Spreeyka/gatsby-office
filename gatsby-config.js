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
    // {
    //   resolve: "gatsby-plugin-sass",
    //   options: {
    //     additionalData: `@import "${__dirname}/src/styles/_styles.scss";`,
    //   },
    // },
  ],
};
