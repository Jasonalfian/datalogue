import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import Navbar from "../components/Globals/Navbar"
import Medium from '../components/Infographics/Medium'

const MediumPage = ({data}) => {
  const date = data.infographic.dateCreated
  // const uid = data.infographic.uid
  const title = data.infographic.Title
  const author = data.infographic.Author
  const minutesRead = data.infographic.minutesRead
  const DescriptionMarkdown = data.infographic.descriptionMarkdown
  const infographicc =  data.infographic.infographic.childImageSharp.fluid
  var infographic2 = ""
  var infographic3 = ""

  if (data.infographic.infographic2 === null){
   
    infographic2 =  ""
  } else {
   
    infographic2 =  data.infographic.infographic2.childImageSharp.fluid
    console.log(infographic2)
  }

  if (data.infographic.infographic3 === null){
    infographic3 =  ""
  } else {
    infographic3 =  data.infographic.infographic3.childImageSharp.fluid
  }

  // const infographic2 =  data.infographic.infographic2.childImageSharp.fluid
  // const infographic = JSON.stringify(Object.values(data.infographic.infographics[0].url)).slice(2,-2) 

  return(
  <Layout>
    <Navbar/>
    <Medium descriptionMarkdown={DescriptionMarkdown} date={date} author={author} readtime={minutesRead} title={title}
    imagee={infographicc} image2={infographic2} image3={infographic3}/>
  </Layout>
  )
}

export const query = graphql`
  query 
  getSingleInfographic($uid: String) {
    infographic: strapiInfographics(uid: {eq: $uid}) {
      id
      uid
      Author
      dateCreated
      CardDescription
      descriptionMarkdown
      Title
      minutesRead
      infographic{
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      infographic2{
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      infographic3{
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`

export default MediumPage
