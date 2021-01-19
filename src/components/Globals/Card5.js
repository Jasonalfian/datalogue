import React from "react"
import Img from "gatsby-image"
import { SRLWrapper } from "simple-react-lightbox"

const MediumImage = ({
    image,image2,image3}) => {
    
    if ((image3 !== "") && (image2 !== "") ){
    return (
      <div className="col-12">

      <div className="card bg-white border-0 mt-2 mb-3" style={{ mihHeight: "100%" }}>
        <SRLWrapper>
          <Img fluid={image}/>
        </SRLWrapper>  
      </div>

      <div className="card bg-white border-0 mt-2 mb-3" style={{ mihHeight: "100%" }}>
        <SRLWrapper>
          <Img fluid={image2}/>
        </SRLWrapper>  
      </div>

      <div className="card bg-white border-0 mt-2 mb-3" style={{ mihHeight: "100%" }}>
        <SRLWrapper>
          <Img fluid={image3}/>
        </SRLWrapper>  
      </div>

    </div>
    )
  } else if ((image3 !== "") && (image2 === "")){
    return(
    <div className="col-12">
    <div className="card bg-white border-0 mt-2 mb-3" style={{ mihHeight: "100%" }}>
        <SRLWrapper>
          <Img fluid={image}/>
        </SRLWrapper>  
      </div>

      <div className="card bg-white border-0 mt-2 mb-3" style={{ mihHeight: "100%" }}>
        <SRLWrapper>
          <Img fluid={image2}/>
        </SRLWrapper>  
      </div>
    </div>
    )
  } else {
    return (
    <div className="col-12">
    <div className="card bg-white border-0 mt-2 mb-3" style={{ mihHeight: "100%" }}>
        <SRLWrapper>
          <Img fluid={image}/>
        </SRLWrapper>  
      </div>
    </div>
    )
  } 
}

export default MediumImage