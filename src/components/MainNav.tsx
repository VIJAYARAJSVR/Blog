import * as React from "react"
import {Link} from "gatsby"
import PropTypes from "prop-types";
import Header from "./Header";


interface ImenuLinksProps {
    name: string,
    link: string,
}

// @ts-ignore
export const MainNav = ({ menuLinks }) => {
    return (
        <nav>
            <ul>
                {
                    menuLinks.map((props:ImenuLinksProps) => (
                    <li key={props.name}>
                        <Link to={props.link}>{props.name}</Link>
                    </li>
                ))

                }
            </ul>
        </nav>
    );
};

MainNav.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
}

export default MainNav