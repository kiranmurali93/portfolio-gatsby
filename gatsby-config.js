module.exports = {
  siteMetadata: {
    pathPrefix:"/portfolio-gatsby",
    siteUrl: "https://www.yourdomain.tld",
    title: "Kiran PK || Portfolio-gatsby",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./src/data/",
      }
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
