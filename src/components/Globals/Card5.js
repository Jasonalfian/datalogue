import React from "react"
import Img from "gatsby-image"
import { SRLWrapper } from "simple-react-lightbox"

const MediumImage = ({
    image,image2,image3}) => {
    
    if ((image3 !== "") && (image2 !== "") ){
    return (
      <div className="col-12">
       <SRLWrapper>
      <div className="card bg-white border-0 mt-2 mb-3" style={{ mihHeight: "100%" }}>
          <Img fluid={image}/>
      </div>

      <div className="card bg-white border-0 mt-2 mb-3" style={{ mihHeight: "100%" }}>
          <Img fluid={image2}/>
      </div>

      <div className="card bg-white border-0 mt-2 mb-3" style={{ mihHeight: "100%" }}>
          <Img fluid={image3}/>
      </div>
      </SRLWrapper>  
    </div>
    )
  } else if ((image3 === "") && (image2 !== "")){
    return(
    <div className="col-12">

    <SRLWrapper>
    <div className="card bg-white border-0 mt-2 mb-3" style={{ mihHeight: "100%" }}> 
          <Img fluid={image}/>
    </div>

      <div className="card bg-white border-0 mt-2 mb-3" style={{ mihHeight: "100%" }}>
          <Img fluid={image2}/>
      </div>
      </SRLWrapper> 
    </div>
    )
  } else {
    return (
    <div className="col-12">
    <SRLWrapper>
    <div className="card bg-white border-0 mt-2 mb-3" style={{ mihHeight: "100%" }}>
          <Img fluid={image}/>
      </div>
      </SRLWrapper> 
    </div>
    )
  } 
}

export default MediumImage