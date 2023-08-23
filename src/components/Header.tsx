import * as React from "react"
import {Link} from "gatsby"
import PropTypes from "prop-types"
import MainNav from "./MainNav";

// @ts-ignore
export const Header = ({siteTitle, menuLinks}) => {
    return (
        <>
            <div>{siteTitle}</div>
            <MainNav menuLinks={menuLinks}/>
        </>
        )
};

Header.propTypes = {
    siteTitle: PropTypes.string,
    siteDescription: PropTypes.string,
    menuLinks: PropTypes.array,
}

Header.defaultProps = {
    siteTitle: ``,
    siteDescription: ``,
    menuLinks: [],
}

export default Header


