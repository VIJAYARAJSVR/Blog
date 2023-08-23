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
        }, {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "content-images",
                "path": "./content/images"
            },
            __key: "content-images"
        }
        ]
};

export default config;


// module.exports = {
//     pathPrefix: `/blog`,
// }