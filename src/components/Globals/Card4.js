import React from "react"
import {Link} from "gatsby"
import logo from '../../images/datalogue.png'
import Img from "gatsby-image"

const Kerjasama = ({
    id, logoLembaga}) => {

    // console.log(logoLembaga)
    
    // var title = "/Datasets/"+ Name  
    // var url= (logodark.internal.description).slice(6,-1)

    // console.log(url)
    // var info= JSON.stringify(Object.values(infographics[0].url)).slice(2,-2)

    return (
        <div className="col-3 col-sm-3 col-md-3 col-lg-2 my-4">
        <div className="card bg-white border-0" style={{ mihHeight: "100%" }}>
          {/* <img src={logo} className="card-img-top3 my-auto mx-auto"/> */}
          <Img fluid={logoLembaga.childImageSharp.fluid} className="card-img-top3 my-auto mx-auto"/>
        </div>
      </div>
    )
}

export default Kerjasama