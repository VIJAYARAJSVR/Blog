import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {
    pathPrefix: `/Blog`,
    siteMetadata: {
        defaultTitle: `Blog`,
        siteUrl: `https://www.yourdomain.tld`,
        defaultDescription: 'description',
        menuLinks: [
            {
                name: `Home`,
                link: `/`,
            },
            {
                name: `Articles`,
                link: `/articles`,
            },
            {
                name: `About`,
                link: `/about`,
            },
            {
                name: `Events`,
                link: `/events`,
            }]
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap",


        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/icon.png"
            }
        }, "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        }, {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `articles`,
                path: `./content/articles/`,
            },
            __key: "content-articles",
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                // Footnotes mode (default: true)
                footnotes: true,
                // GitHub Flavored Markdown mode (default: true)
                gfm: true,
                // Plugins configs
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 1080,
                            quality: 100,
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "content-images",
                "path": "./content/images"
            },
            __key: "content-images"
        },
        `gatsby-transformer-yaml`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./content/data/`,
            },
        },
        {
            resolve: `gatsby-transformer-yaml`,
            options: {
                typeName: `xxxxxxxxxxxxxxx`, // a fixed string
            },
        },
    ]
};

export default config;


// module.exports = {
//     pathPrefix: `/blog`,
// }