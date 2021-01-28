import React from 'react'
import styled from "styled-components"

export default function Kontak({form}) {
    return (
    <div className="homeSearch2 d-flex align-items-center">
      <div className="container">
          {/* <Title title="Our Story"/> */}
        <div className="row">
          <div className="col-10 col-sm-11 mx-auto text-center">
            <HeroH2 className="text-white mb-4">
               Ingin menjadi kontributor <br/> Data Publik KM ITB?
                
                {/* Bisa langsung ditanyakan kepada Id Line <span className="font-weight-bold">Contact Person</span> di bawah ini : */}
            </HeroH2>

            <a href={form} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-tosca-invert">Klik disini </button>
            </a>

            {/* <p className="mb-2 text-white">
                Lidya Jessica: <span className="font-weight-bold">jessica_han03</span> 
                <br/>
                Muhammad Yanza Hattari: <span className="font-weight-bold">yanzahattari</span> 
            </p> */}

            {/* Untuk input searchbar */}
            {/* <input type="search" className="form-control mt-3 heightSearch" placeholder="Cari datasets dan poster disini"/> */}
            
          </div>
        </div>
      </div>
        </div>
    )
}

const HeroH2 = styled.div`
    font-size: clamp(0.4rem, 7vw, 2.2rem);
    padding: 0 1 rem;
    font-weight:600;
`