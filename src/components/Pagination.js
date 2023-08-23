import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

// import * as styles from "./pagination.module.css"

const Pagination = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <nav className={""}>
      <div className={""}>
        {previousPagePath && <Link to={previousPagePath}>← Newer Posts</Link>}
      </div>

      <div className={""}>
        {nextPagePath && <Link to={nextPagePath}>Older Posts →</Link>}
      </div>
    </nav>
  )
}

Pagination.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

Pagination.defaultProps = {
  pageContext: {},
}

export default Pagination
