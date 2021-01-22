import React from "react"
import connect from "../../images/connect.png"
import styled from "styled-components"

export default function info() {
  return (
    <section className="py-5 platform">
      <div className="container">
        <HeroH1  data-sal="slide-up" data-sal-duration="1000" data-sal-easing="ease" className="text-white font-weight-bold mx-3 mt-4 mx-sm-5">Satu <span className="oneData">Data</span> Satu <span className="oneData">Platform</span></HeroH1>
        <br/>
        <HeroH1  data-sal="slide-up" data-sal-duration="1000" data-sal-easing="ease" className="text-white font-weight-bold mt-n4 mx-3 mx-sm-5">Untuk Publik</HeroH1>
        <div className="row mx-sm-5 mx-3">
          <img  className="gifgrafik py-5 mx-auto" style={{height:"100%",width:"100%"}} imgstyle={{objectFit: "contain"}} alt="" src={connect}></img>
        </div>
      </div>
    </section>
  )
}

const HeroH1 = styled.div`
    font-size: clamp(2rem, 7vw, 3rem);
    padding: 0 1 rem;
    font-weight:900;
`