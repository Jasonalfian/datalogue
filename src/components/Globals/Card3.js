import React from "react"
import Img from "gatsby-image"
import {Link} from "gatsby"
import logo from '../../images/datalogue.png'

const Category = ({
    logodark, Name}) => {
    
    var title = "/Datasets/"+ Name  
    // var url= (logodark.internal.description).slice(6,-1)
    var image= logodark.childImageSharp.fluid

    // console.log(url)
    // var info= JSON.stringify(Object.values(infographics[0].url)).slice(2,-2)

    return (
        
      <div className="col-5 col-sm-6 col-md-6 col-lg-4 my-4">
        <div className="card bg-light" style={{ mihHeight: "100%" }}>
        <Link to={title} style={{textDecoration: 'none',color: 'black'}}>
          {/* <img src={url} className="card-img-top2" /> */}
          <Img fluid={image} className="card-img-top2" />
          <div className="card-body card-description">
            <div className="center">
            <h4 style={{fontWeight: 'bold'}}>{Name}</h4>
            {/* <h6>{CardDescription}</h6> */}
            </div>
          </div>
          </Link>
        </div>
      </div>
    )
}

export default Category