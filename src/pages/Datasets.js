import React, {useState} from "react"
import {graphql } from "gatsby"
import {useFlexSearch} from 'react-use-flexsearch'
import styled from 'styled-components'

import Layout from "../components/layout"
import NavbarDark from "../components/Globals/NavbarDark"
import SEO from "../components/seo"
import DatasetsFull from "../components/Datasets/DatasetsFull"
import SearchResult from "../components/Datasets/searchResult"

import SearchBar from "../components/Globals/Search"
// import Kontak from "../components/Datasets/Kontak"
import Hero from "../components/Globals/Hero"

export const unFlattenResults = results =>
    results.map(post => {
        const {id, Name, Author, Link, publishedDate } = post;
        return {id,Name, Author, Link, publishedDate};
    })

export default ({ data }) => {

    const {
      localSearchDataset: {index,store},
        allStrapiCategories: { nodes: Categories },
    } = data
    
    const form = data.strapiFormKontak.linkForm

    var query
    
    // const { search } = window.location
    if (typeof window !== `undefined`){
      query = new URLSearchParams(window.location).get('s')
    }
    // const query = new URLSearchParams(window.location).get('s')
    const [searchQuery, setSearchQuery] = useState(query || '')
    
    const results = useFlexSearch(searchQuery, index, store)
    // console.log(results.length)
    // const Infographics = searchQuery ? unFlattenResults(results) : nodes

    return ( <Layout>
        <NavbarDark/>
        <SEO title = "Home"/>
        <div className="infographicSearch d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-10 col-sm-11 mx-auto">
                <center>
                <HeroH1 className="font-weight-bold text-white">What are you looking for?</HeroH1>
                </center>
                <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}/>
              </div>
            </div>
          </div>
        </div>

        {(results.length===0) && (searchQuery) ? 
          <section className="section">
            <div className="d-flex align-items-center justify-content-center color-tosca half-page">
              <div className="container">
               <HeroH2 className="text-center">Dataset tidak ditemukan</HeroH2>
              </div>
            </div>
          </section>    
        :<p></p>}
        
        {(searchQuery)&&(results.length!==0)?
        <SearchResult dataset={results}/>:<p></p>
        }

        {(searchQuery)?
        <p></p>:<DatasetsFull categories = { Categories }/> 
        }

      <Hero
        img={data.img.childImageSharp.fluid}
        title=""
        content="kolaborator"
        styleClass="kolaborator"
        linkForm={form}
      />
        {/* <Kontak form={form}/> */}
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

export const query = graphql `
query {
  img: file(relativePath: { eq: "bgkontributor.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  strapiFormKontak{
    linkForm
  }
  localSearchDataset {
    index
    store
  }
  allStrapiCategories(sort: {fields: priority, order: ASC}) {
    nodes {
      id
      Name
      logodark {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
}`