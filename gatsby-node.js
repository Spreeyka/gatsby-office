const path = require("path");

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allDatoCmsNews(limit: 1000) {
          edges {
            node {
              date
              id
              title
              image {
                gatsbyImageData
              }
            }
          }
        }
      }
    `
  );

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create pages for each markdown file.
  const newTemplate = path.resolve(`src/templates/newTemplate.js`);
  result.data.allDatoCmsNews.edges.forEach((singleNew) => {
    const path = singleNew.node.id;
    createPage({
      path,
      component: newTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        data: singleNew.node,
      },
    });
  });
};
