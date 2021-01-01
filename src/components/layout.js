/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./bootstrap.min.css"
import "./layout.css"
import SimpleReactLightbox from 'simple-react-lightbox'

import Footer from "./Globals/Footer"

const Layout = ({ children }) => (<>
<SimpleReactLightbox>
{children}
</SimpleReactLightbox>
<Footer/>
</>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout