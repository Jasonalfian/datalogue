import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Navbar from "../components/Globals/Navbar"
import Medium from '../components/Infographics/Medium'

const MediumPage = ({data}) => {
  const date = data.infographic.dateCreated
  const title = data.infographic.Title
  const author = data.infographic.Author
  const minutesRead = data.infographic.minutesRead
  const DescriptionMarkdown = data.infographic.descriptionMarkdown
  const infographic = data.infographic.infographics


  
  // const infographic = JSON.stringify(Object.values(data.infographic.infographics[0].url)).slice(2,-2) 

  return(
  <Layout>
    <Navbar/>
    <Medium descriptionMarkdown={DescriptionMarkdown} date={date} author={author} readtime={minutesRead} title={title}
    image={infographic} />
  </Layout>
  )
}

export const query = graphql`
  query 
  getSingleInfographic($title: String) {
    infographic: strapiInfographics(Title: {eq: $title}) {
      id
      Author
      dateCreated
      CardDescription
      descriptionMarkdown
      Title
      minutesRead
      infographics {
        id
        url
      }
    }
  }
`

export default MediumPage
