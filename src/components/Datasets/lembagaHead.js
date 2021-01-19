import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import {Link} from "gatsby"

const LembagaHead = ({category}) => {

  const back ="< Back"

  return (
    <div className="bg-black">
    <div className="container">
      <div className="">
      <div className ="ml-3 ml-sm-5 py-3">
          <Link to={"/Datasets"}>
            <p className="mb-n3" style={{textDecoration: 'none',color: 'white'}}>{back}</p>
          </Link>
          </div>
      
    <div className="infographicSearch d-flex align-items-center justify-content-center">
      
      <container className="mt-n5">
        <div className="row mb-n3">
          <div className="col-12">
            <center>
              <Img style={{ height: "200px", width: "200px" }} fluid={category.logowhite.childImageSharp.fluid}/>
              {/* <img style={{height:"120px",width:"120px"}} src={LembagaPic} /> */}
            </center>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-12">
            <center>
              <HeroH1 className="font-weight-bold text-white">{category.Name}</HeroH1>
            </center>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mx-2">
            <center>
              <p className="text-white">{category.shortDescription}</p>
            </center>
          </div>
        </div>
      </container>
    </div>
    </div>
    </div>
    </div>
  )
}

export default LembagaHead

const HeroH1 = styled.div`
    font-size: clamp(1.5rem, 2vw, 3rem);
    /* margin-bottom: 1.5rem; */
    /* letter-spacing: 3px; */
    /* padding: 0 1 rem; */
`