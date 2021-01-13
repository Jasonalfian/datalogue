import React from "react"
import {Link} from "gatsby"
import Img from "gatsby-image"

const Infographic = ({
    coverCard, CardDescription, Title}) => {
    
    var title = "/Infographics/"+Title  
    var image = coverCard.childImageSharp.fluid

    return (
        
      <div className="col-10 col-sm-8 col-md-6 col-lg-4 my-4">
        <div className="card bg-light" style={{ mihHeight: "100%" }}>
        <Link to={title} style={{textDecoration: 'none',color: 'black'}}>
          {/* <img src={url} className="card-img-top" /> */}
          <Img fluid={image} className="card-img-top" />
        
          <div className="card-body card-description2">
            <div className="center">
            <h4 style={{fontWeight: 'bold'}}>{Title}</h4>
            <h6>{CardDescription}</h6>
            </div>
          </div>
          </Link>
        </div>
      </div>
    )
}

export default Infographic