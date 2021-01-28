import React from 'react'
import styled from "styled-components"

export default function HomeSearch({data}) {

  
    return (
        <div className="homeSearch d-flex align-items-center">
      <div className="container">
          {/* <Title title="Our Story"/> */}
        <div className="row">
          <div className="col-10 col-sm-11 mx-auto text-center align-items-center">
            
            <HeroH1 
            // data-sal="slide-up" data-sal-duration="1000" data-sal-easing="ease" 
            className="font-weight-bold text-white mb-5">
                <span className="oneData">Data KM ITB</span> <br className="d-sm-none d-block"/>dalam Angka
            </HeroH1>

            <div className="row">

            <div className="col-6 col-sm-4">
            <HeroP 
            data-sal="slide-up" data-sal-delay="300" data-sal-duration="1000" data-sal-easing="ease" 
            className="text-white">
                {data.allStrapiInfographics.totalCount}
            </HeroP>

            <br/>
            <HeroP2  data-sal="slide-up" data-sal-delay="300" data-sal-duration="1000" data-sal-easing="ease"  className="oneData mt-n4" >Infographics</HeroP2>
            </div>

            <div className="col-6 col-sm-4">
            <HeroP 
            data-sal="slide-up" data-sal-delay="300" data-sal-duration="1000" data-sal-easing="ease" 
            className="text-white">
                {data.allStrapiDataests.totalCount}+
            </HeroP>
            
            <br/>
            <HeroP2  data-sal="slide-up" data-sal-delay="300" data-sal-duration="1000" data-sal-easing="ease"  className="oneData mt-n4" >Datasets</HeroP2>
            </div>

            <div className="col-6 col-sm-4 mx-auto mx-sm-0">
            <HeroP 
            data-sal="slide-up" data-sal-delay="300" data-sal-duration="1000" data-sal-easing="ease" 
            className="mt-4 mt-sm-0 text-white">
                {data.allStrapiKolaborasi.totalCount}
            </HeroP>
            

            <br/>
            <HeroP2  data-sal="slide-up" data-sal-delay="300" data-sal-duration="1000" data-sal-easing="ease"  className="oneData mt-n4" >Partnerships</HeroP2>
            </div>

            </div>

            {/* Untuk input searchbar */}
            {/* <input type="search" className="form-control mt-3 heightSearch" placeholder="Cari datasets dan poster disini"/> */}
          </div>
        </div>
      </div>
        </div>
    )
}

const HeroH1 = styled.div`
    font-size: clamp(0.5rem, 9vw, 3rem);
    font-weight:500;
`
const HeroP = styled.div`
    font-size: clamp(0.5rem, 8vw, 2.7rem);
    font-weight:600;
`

const HeroP2 = styled.div`
    font-size: clamp(0.4rem, 5vw, 1.6rem);
    font-weight:400;
`