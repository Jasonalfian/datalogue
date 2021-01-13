import React from "react"
import Img from "gatsby-image"
import {Link} from "gatsby"

const Category = ({
    logodark, Name}) => {
    
    var title = "/Datasets/"+ Name  
    var image= logodark.childImageSharp.fluid


    return (
        
      <div className="col-5 col-sm-6 col-md-6 col-lg-4 my-4">
        <div className="card bg-light" style={{ mihHeight: "100%" }}>
        <Link to={title} style={{textDecoration: 'none',color: 'black'}}>
          <Img fluid={image} className="card-img-top2" />
          <div className="card-body card-description">
            <div className="center">
            <h4 style={{fontWeight: 'bold'}}>{Name}</h4>
            </div>
          </div>
          </Link>
        </div>
      </div>
    )
}

export default Category