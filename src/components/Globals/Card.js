import React from "react"
import {Link} from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

export default function Card({img, title, desc, home, path }) {

  if (home === "yes") {
    return (
      <div className="col-10 col-sm-10 col-md-8 col-lg-6 mx-auto my-3">
        <div className="card bg-light" style={{ mihHeight: "100%" }}>
        <Link to={path} style={{textDecoration: 'none',color: 'black'}}>
          <img src={img} alt="" className="card-img-top2 "/>
          <div className="card-body center">
            <HeroH1 className=" color-hover my-2 my-sm-3">{title}</HeroH1>
            <h4 className="justify">{desc}</h4>
          </div>
          </Link>
        </div>
      </div>
    )
  } if (home === "medium") {
    return(
    <div className="col-12">
      <div className="card bg-white border-0" style={{ mihHeight: "100%" }}>
      <img src={img} alt="" className="card-img-top3 my-auto mx-auto"/>
      </div>
    </div>
    )
  } 
  
  else {
    return (

      <div className="col-3 col-sm-3 col-md-3 col-lg-2 my-4">
        <div className="card bg-white border-0" style={{ mihHeight: "100%" }}>
          <Img src={img} className="card-img-top3 my-auto mx-auto"/>
        </div>
      </div>
    )
  }
}

const HeroH1 = styled.div`
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    font-weight:500;
`
