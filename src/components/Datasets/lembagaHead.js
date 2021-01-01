import React from "react"
import LembagaPic from "../../images/icon organisasi putih 1.png"
import styled from "styled-components"
import Img from "gatsby-image"

const LembagaHead = ({category}) => {

  console.log(category.shortDescription)

  return (
    <div className="infographicSearch d-flex align-items-center justify-content-center">

      <container className="justify-content-center mt-n5">
        <div className="row mb-n4">
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
          <div className="col-12">
            <center>
              <p className="text-white">{category.shortDescription}</p>
            </center>
          </div>
        </div>
      </container>

      {/* <div className="px-5"> */}
        {/* <div className="row ml-lg-5 mr-lg-5 justify-content-center d-flex align-items-center"> */}
         
          {/* <div class="col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3"> */}
            {/* <img src={LembagaPic} /> */}
          {/* </div> */}
            
            {/* <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 left-align"> */}
            {/* Placeholder untuk nama dari lembaga */}
            {/* <h1 style={{fontSize:"250%"}} className="font-weight-bold mb-4 color-tosca">
              Manajemen dan Pengembangan Organisasi
            </h1> */}

            {/* <HeroH1 className="font-weight-bold mb-4 color-tosca">Kaderisasi</HeroH1> */}

          {/* </div> */}
        {/* </div> */}
      {/* </div> */}

    </div>
  )
}

export default LembagaHead

const HeroH1 = styled.div`
    font-size: clamp(2rem, 2vw, 3rem);
    /* margin-bottom: 1.5rem; */
    /* letter-spacing: 3px; */
    /* padding: 0 1 rem; */
`