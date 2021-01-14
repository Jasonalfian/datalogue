import React from "react"
import Title from "../Globals/Title"
import { SRLWrapper } from "simple-react-lightbox"
import ReactMarkdown from "react-markdown"
import {Link} from "gatsby"
import Img from "gatsby-image"

const options = {
  // thumbnails: {
  //   showThumbnails: false
  // }
}

const back = "< Back"

export default function Medium({descriptionMarkdown ,title, date, author, readtime, imagee, image2, image3}) {
  return (
    <div>
      <div class="container ">
        <div class="py-2">

          <Link to={"/Infographics"}>
            <p className="mb-3" style={{textDecoration: 'none',color: 'black'}}>{back}</p>
          </Link>
          <Title title={title} />
          <div className="row justify-content-center">

            {/* Placeholder tanggal */}
            <p className="px-2">{date}</p>

            {/* Placeholder nama */}
            <p className="px-2">{author}</p>

            {/* Placeholder waktu baca*/}
            <p className="px-2">{readtime} minutes</p>
            </div>
        
            <div className="row py-3 mx-3 text-justify">
              <div className="col-12">

              <ReactMarkdown className=""
                source={descriptionMarkdown}
                transformImageUri={uri=>uri.startsWith('http') ? uri:`${process.env.IMAGE_BASE_URL}${uri}`}/>
              </div>
          
          {/* Placeholder untuk gambar medium*/}
        
        <div className="col-12">

        <div className="card bg-white border-0 mt-2 mb-3" style={{ mihHeight: "100%" }}>
              <SRLWrapper options={options}>
                <Img fluid={imagee}/>
              </SRLWrapper>  
            </div>

            <div className="card bg-white border-0 mt-2 mb-3" style={{ mihHeight: "100%" }}>
              <SRLWrapper options={options}>
                <Img fluid={image2}/>
              </SRLWrapper>  
            </div>

            <div className="card bg-white border-0 mt-2 mb-3" style={{ mihHeight: "100%" }}>
              <SRLWrapper options={options}>
                <Img fluid={image3}/>
              </SRLWrapper>  
            </div>

        {/* {image.map((item)=>{
          return( 
            <div className="card bg-white border-0 mt-2 mb-4" style={{ mihHeight: "100%" }}>
              <SRLWrapper options={options}>
                <a href={item.url.startsWith('http') ? item.url:`${process.env.IMAGE_BASE_URL}${item.url}`}>  
                  <img src={item.url.startsWith('http') ? item.url:`${process.env.IMAGE_BASE_URL}${item.url}`} alt={title} className="card-img-top3 my-auto mx-auto"/>
                </a>
              </SRLWrapper>  
            </div>
          )
        })} */}
         
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

