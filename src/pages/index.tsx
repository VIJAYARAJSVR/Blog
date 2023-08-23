import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import Layout from "../components/Layout";
// import "../styles/global.css"

import { graphql } from "gatsby"




const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <h1 className="text-center font-bold mt-5 bg-amber-600">
                This is blog website
            </h1>;
        </Layout>
    )
}

//below is the page level graphql query only used in pages
//ALWAYS PLACE IT BELOW THE PAGE.
export const query = graphql`
    query HomePageQuery {
        site {
            siteMetadata 
            {
                description
            }
        }
    }
`

export default IndexPage




// below is Gatsby built-in Head API which replaces  react-helmet
export const Head: HeadFC = () => <title>Vijayaraj's Blog</title>
