import React from "react"
import styled from "styled-components"

export default function info() {
  
  return (
    <section className="py-5">
      <div className="container">
          {/* <Title title="Our Story"/> */}
        <div className="row">
          <div className="col-10 col-sm-11 mx-auto text-center">
            <HeroH2 
            // data-sal="slide-up" data-sal-duration="1000" data-sal-easing="ease" 
            className="mb-5 font-weight-bold">
              <span className="oneData">Datalogue</span> sebuah museum untuk mengintegrasikan seluruh data dan arsip 
              publik milik Keluarga Mahasiswa ITB (KM ITB) di satu tempat
            </HeroH2>
            {/* <Link to="/about/">
                <button className="btn text-uppercase btn-yellow"> About Page </button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  )
}

const HeroH2 = styled.div`
    font-size: clamp(0.5rem, 6vw, 2rem);
    padding: 0 1 rem;
    font-weight:900;
`