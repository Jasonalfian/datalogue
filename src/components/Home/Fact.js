import React from 'react'
import Card from '../Globals/Card'
import infografis from '../../images/crop.png'
import dataset from '../../images/crop2.png'
import styled from "styled-components"

export default function Fact() {
    return( 
    <section className="py-5 mx-3 fact">
    <div className="container">
      <div className="mb-2">
      <HeroH1 className="oneData font-weight-bold">Not just a fact, but</HeroH1>
      <br/>
      <HeroH1 className="oneData font-weight-bold mt-n4">useful readable information</HeroH1>
    </div>
      <div className="row">
        <Card img={infografis}title="Infographics" desc="" home="yes" path="/Infographics"/>
        <Card img={dataset} title="Datasets" desc="" home="yes" path="/Datasets"/>
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