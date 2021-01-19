import React from 'react'
import Card4 from '../Globals/Card4'
import styled from "styled-components"

export default ({data}) => {

  const {
    allStrapiKolaborasi: {nodes: Kolaborasi},
  } = data

    return( 
    <section className="fact mb-3">
    <div className="container">
      <div className="mx-3">
      <HeroH1 className="font-weight-bold"> <span className="oneData">Kolaborasi </span>karya dengan
      </HeroH1>
    </div>
      <div className="justify-content-start row py-3 ml-1 mr-2">
        
           {
              Kolaborasi.map((kolaborasi) => {
              return <Card4 key={kolaborasi.id} {...kolaborasi}/>
            })}
      </div>
    </div>
  </section>
 )
}

const HeroH1 = styled.div`
    font-size: clamp(2rem, 7vw, 3rem);
    font-weight:900;
`

