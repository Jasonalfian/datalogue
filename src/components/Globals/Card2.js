import React from "react"
import {Link} from "gatsby"
import Img from "gatsby-image"

const Infographic = ({
    coverCard, Title}) => {
    
    var title = "/Infographics/"+Title  
    var image = coverCard.childImageSharp.fluid

    return (
        
      <div className="col-10 col-sm-8 col-md-6 col-lg-4 my-4">
        <div className="card bg-light" style={{ mihHeight: "100%" }}>
        <Link to={title} style={{textDecoration: 'none',color: 'black'}}>
          <Img fluid={image} className="card-img-top" />
        
          <div className="card-body card-description2">
            <div className="center">
            <h4>{Title}</h4>
            </div>
          </div>
          </Link>
        </div>
      </div>
    )
}

export default Infographic