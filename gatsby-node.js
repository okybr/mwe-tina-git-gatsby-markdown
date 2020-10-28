exports.createPages = async ({
    actions: { createPage },
    graphql,
    reporter
}) => {

    const templateComponent = require.resolve(
        './src/templates/general.jsx');

    const result = await graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `);

    if (result.errors) {
        reporter.panicOnBuild(
            `Error while running GraphQL query.`);
        return;
    }

    result.data.allMarkdownRemark.edges.forEach(({
        node: { frontmatter: { slug }, },
    }) => {
        createPage({
            path: slug,
            component: templateComponent,
            context: { slug },
        });
    });
};
