import React, {useState} from "react"
import {graphql } from "gatsby"
import styled from 'styled-components'
import {useFlexSearch} from 'react-use-flexsearch'

import Layout from "../components/layout"
import NavbarDark from "../components/Globals/NavbarDark"
import SearchBar from "../components/Globals/Search"
import SEO from "../components/seo"

import InfoFull from "../components/Infographics/InfoFull"
import Pager from "../components/Globals/Pager"

export const unFlattenResults = results =>
    results.map(post => {
        const { id, Title, CardDescription, fluid } = post;
        return { id, CardDescription, Title, coverCard: {childImageSharp: {fluid}}};
    })

export default ({data, pageContext}) => {

const {
  localSearchPages: {index,store},
  allStrapiInfographics: {nodes},
} = data

var query

// const { search } = window.location
if (typeof window !== `undefined`){
  query = new URLSearchParams(window.location).get('s')
}
// const query = new URLSearchParams(window.location).get('s')
const [searchQuery, setSearchQuery] = useState(query || '')

const results = useFlexSearch(searchQuery, index, store)
const Infographics = searchQuery ? unFlattenResults(results) : nodes

return (

  <Layout>
    <NavbarDark/>
    <SEO title="Home" />
    <div className="infographicSearch d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-11 mx-auto">
            {/* <h3 className="font-weight-bold text-white mb-4 display-4">
                What are you looking for?
            </h3> */}
            <center>
            <HeroH1 className="font-weight-bold text-white">What are you looking for?</HeroH1>
            </center>
            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                jenis="infographic"/>
          </div>
        </div>
      </div>
    </div>
    <InfoFull infographics={Infographics} />
      
    {(results.length===0) && (searchQuery) ? 
       <section className="section">
       <div className="d-flex align-items-center justify-content-center color-tosca half-page">
           <div className="container">
               <HeroH2 className="text-center">Infographic tidak ditemukan</HeroH2>
           </div>
       </div>
   </section>    
    
    :<p></p>}
    <Pager pageContext={pageContext}/>
  </Layout>
)
}

const HeroH1 = styled.div`
    font-size: clamp(2.5rem, 7vw, 2.5rem);
    margin-bottom: 1.5rem;
    padding: 0 1 rem;
`

const HeroH2 = styled.div`
    font-size: clamp(1.5rem, 7vw, 2.5rem);
    margin-bottom: 1.5rem;
    font-weight: 600;
`

export const query = graphql`
query ($skip: Int!, $limit: Int!) {
  localSearchPages {
    index
    store
  }
  allStrapiInfographics (
    sort:{
      fields: [id]
      order: DESC
    }skip: $skip
    limit: $limit
  ){
    nodes {
      id
      Title
      coverCard {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
} 
`

