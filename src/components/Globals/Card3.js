import React from "react"
import Img from "gatsby-image"
import {Link} from "gatsby"
import styled from "styled-components"

const Category = ({
    logodark, Name}) => {
    
    var title = "/Datasets/"+ Name  
    var image= logodark.childImageSharp.fluid


    return (
        
      <div className="col-5 col-sm-6 col-md-6 col-lg-4 my-4">
        <div className="card bg-light" style={{ mihHeight: "100%" }}>
        <Link to={title} style={{textDecoration: 'none',color: 'black'}}>
          <Img fluid={image} className="card-img-top2" />
          <div className="card-body card-description mt-n3">
            <div className="center">
            <HeroP>{Name}</HeroP>
            </div>
          </div>
          </Link>
        </div>
      </div>
    )
}

export default Category

const HeroP = styled.div`
    font-size: clamp(0.8rem, 1vw, 3rem);
    padding: 0 1 rem;
    font-weight:700;
`