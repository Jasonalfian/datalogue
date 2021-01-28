import React from "react"
import styled from "styled-components"

export default function Kontributor({linkForm}) {
  
  return (
    <div className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-11 mx-auto text-center">
            <HeroH2 className="text-white mb-4">
               Ingin menjadi kontributor <br/> <span className="oneData">Data Publik KM ITB?</span>
            </HeroH2>
            <a href={linkForm} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-tosca">Klik di sini </button>
            </a>

          </div>
        </div>
      </div>
    </div>
  )
}

const HeroH2 = styled.div`
    font-size: clamp(0.4rem, 6vw, 2rem);
    padding: 0 1 rem;
    font-weight:700;
`