const path = require(`path`)
const _ = require(`lodash`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { paginate } = require(`gatsby-awesome-pagination`)

// Markdown items: Create slug nodes based on folder
exports.onCreateNode = ({ node, getNode, actions }) => {
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `content` })

        actions.createNodeField({
            node,
            name: `slug`,
            value: `/articles${slug}`,
        })
    }
}

// Generate pages for each article.

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    // Query all the data
    const queryResult = await graphql(`
        {
            articleQuery: allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
            taxQuery: allMarkdownRemark {
                group(field: frontmatter___subject) {
                    fieldValue
                    nodes {
                        id
                    }
                }
            }
        }
    `)
    if (queryResult.errors) {
        reporter.panic("error loading articles", queryResult.errors)
        return
    }

    // Generate single article pages
    const articles = queryResult.data.articleQuery.edges
    articles.forEach(article => {
        createPage({
            path: article.node.fields.slug,
            component: path.resolve(`./src/templates/article.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: article.node.fields.slug,
            },
        })
    })

    // Create your paginated pages
    paginate({
        createPage, // The Gatsby `createPage` function
        items: articles, // An array of objects
        itemsPerPage: 2, // How many items you want per page
        pathPrefix: "/articles", // Creates pages like `/blog`, `/blog/2`, etc
        component: path.resolve(`./src/templates/articles.js`), // Just like `createPage()`
    })

    const taxonomies = queryResult.data.taxQuery.group
    taxonomies.map(({ nodes: articles, fieldValue }) => {
        paginate({
            createPage, // The Gatsby `createPage` function
            items: articles, // An array of objects
            itemsPerPage: 2, // How many items you want per page
            pathPrefix: `/subjects/${_.kebabCase(fieldValue)}`, // Creates pages like `/blog`, `/blog/2`, etc
            component: path.resolve(`./src/templates/subjects.js`), // Just like `createPage()`
            context: { subject: fieldValue },
        })
    })


}