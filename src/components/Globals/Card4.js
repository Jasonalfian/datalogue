import React from "react"
import Img from "gatsby-image"

const Kerjasama = ({
    logoLembaga}) => {

    return (
        <div className="col-3 col-sm-3 col-md-3 col-lg-2 my-4">
        <div className="card bg-white border-0" style={{ mihHeight: "100%" }}>
          {/* <img src={logo} className="card-img-top3 my-auto mx-auto"/> */}
          <Img fluid={logoLembaga.childImageSharp.fluid} className="card-img-top3 my-auto mx-auto"/>
        </div>
      </div>
    )
}

export default Kerjasama