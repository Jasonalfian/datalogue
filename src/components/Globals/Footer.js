import React from "react"
import SocialLinks from "../Constant/SocialLinks"
// import arunika from '../../images/arunika.png'
// import kemenfo from '../../images/kemenfo.png'
import ReactMarkdown from "react-markdown"
import {StaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

export default function Footer() {

  return (

    <StaticQuery
      query={graphql`query { 
        strapiFooter {
          namaKementerian
          contactPerson
          logo1{
            childImageSharp{
              fixed{
                ...GatsbyImageSharpFixed_tracedSVG
              }
            }
          }
          logo2{
            childImageSharp{
              fixed{
                ...GatsbyImageSharpFixed_tracedSVG
              }
            }
          }
        }
      }`}
    render={data =>(
    
    <div>
      <footer className="footer py-5">
        <div className="container">

        <div className="row">

        <div className="col-12 col-sm-6 col-md-6 col-lg-5 mt-n2">

              <Img style={{height:"50px",width:"50px"}} fixed={data.strapiFooter.logo1.childImageSharp.fixed}/>
              <Img style={{height:"50px",width:"50px"}} fixed={data.strapiFooter.logo2.childImageSharp.fixed}/>

              {/* <img style={{height:"50px", width:"50px"}} src={arunika} alt="arunika"/>
              <img style={{height:"50px", width:"50px"}} src={kemenfo} alt="kemenfo"/> */}

              <ReactMarkdown className="mt-2 text-yellow"
              source={data.strapiFooter.namaKementerian}
              />

              {/* <p className="text-yellow font-weight-bold">Kementerian Museum Data</p>
              <p className="text-yellow">Kemenkoan Komunikasi Kreatif dan Informasi</p>
              <p className="text-yellow">Kabinet "Arunika" KM ITB 2020/2021</p> */}
        </div>

        
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">

          <ReactMarkdown className="mt-3 mt-sm-5 text-yellow"
              source={data.strapiFooter.contactPerson}
              />

              {/* <p className="mt-3 mt-sm-5 text-yellow font-weight-bold">Contact Person</p>
              <p className="text-yellow">M. Yanza Hattari: yanzahattari (id line)</p>
              <p className="text-yellow">Lidya Jessica: jessica_han03 (id line)</p> */}
           
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-3">
          <div className="row">
            <div className="text-yellow mx-2 mt-2 mt-sm-5">
                <SocialLinks/>              
            </div>

            {/* <div className="row py-3">
            <div className="col-12 col-md-6 text-yellow text-capitalize mx-auto text-center">
              <h3> &copy;{new Date().getFullYear().toString()} Data Publik KM ITB</h3>
            </div>
          </div> */}

          </div>
          </div>


          </div>

        </div>
      </footer>
    </div>
    )}
    />
  )
}
