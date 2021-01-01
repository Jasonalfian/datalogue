import React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"
import Img from "gatsby-image"

const Infographic = ({
    infographics, coverCard, CardDescription, Title}) => {
    
    var title = "/Infographics/"+Title  
    // var info = infographics[0].url
    // var url= 'http://167.205.57.47:1337' + info
    
    // if(coverCard.formats.large.childImageSharp.fluid !== null){
    //   var image = CoverCard.formats.medium.childImageSharp.fluid
    //   }
    // if(coverCard.formats.medium.childImageSharp.fluid !== null){
    // var image = coverCard.formats.medium.childImageSharp.fluid
    // } else {
      // var image = coverCard.formats.small.childImageSharp.fluid  
    // }

    var image = coverCard.childImageSharp.fluid
    
    // console.log(infographics)
    
    // console.log(url)
    // var info= JSON.stringify(Object.values(infographics[0].url)).slice(2,-2)

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