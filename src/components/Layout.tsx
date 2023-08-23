import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import 'twin.macro'

import {StaticImage} from "gatsby-plugin-image"
import {GatsbyImage, getImage} from "gatsby-plugin-image"


import Header from "./Header"
import Footer from "./Footer"

import "../styles/global.css"
import "../fonts/fonts.css"
import * as styles from "../components/Layout"
import {useStaticQuery, graphql} from "gatsby";


//Gatsby Layout  is a built-in Components
// @ts-ignore
export const Layout = ({children}) => {

    //below is the static  graphql query
    // Destructure query return down to site:
    const {site} = useStaticQuery(
        graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata
                    {
                        defaultTitle
                        menuLinks
                        {
                            name
                            link
                        }
                    }
                }
            }
        `
    )


    return (
        <>
            <Header
                siteTitle={site.siteMetadata.defaultTitle}
                menuLinks={site.siteMetadata.menuLinks}
            />
            <main id="primary">
                {children}
            </main>
            <Footer/>
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}


export default Layout











