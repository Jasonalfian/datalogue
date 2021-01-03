import React from 'react'
import styled from 'styled-components'

export default function SearchSection() {
    return (
        <div className="infographicSearch d-flex align-items-center">
      <div className="container">
          {/* <Title title="Our Story"/> */}
        <div className="row">
          <div className="col-10 col-sm-11 mx-auto">
            {/* <h3 className="font-weight-bold text-white mb-4 display-4">
                What are you looking for?
            </h3> */}
            <center>
            <HeroH1 className="font-weight-bold text-white">What are you looking for?</HeroH1>
            </center>
            {/* input searchbar return hanya infographics */}
            {/* <input type="search" className="form-control mt-3 heightSearch" placeholder="Search Posters Here"/> */}
          </div>
        </div>
      </div>
        </div>
    )
}

const HeroH1 = styled.div`
    font-size: clamp(2.5rem, 7vw, 2.5rem);
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    padding: 0 1 rem;
`