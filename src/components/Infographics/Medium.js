import React from "react"
import Title from "../Globals/Title"
import { SRLWrapper } from "simple-react-lightbox"
import ReactMarkdown from "react-markdown"

const options = {
  thumbnails: {
    showThumbnails: false
  }
}

export default function Medium({descriptionMarkdown ,title, date, author, readtime, image}) {
  return (
    <div>
      <div class="container px-5">
        <div class="py-5">
          <Title title={title} />
          <div className="row justify-content-center">

            {/* Placeholder tanggal */}
            <p className="px-2">{date}</p>

            {/* Placeholder nama */}
            <p className="px-2">{author}</p>

            {/* Placeholder waktu baca*/}
            <p className="px-2">{readtime} minutes</p>
        
            <div className="row py-3 mx-3">
               {/* Placeholder deskripsi gambar dalam bentuk paragraf*/}
              {/* <p className="text-justify">
                {description}
              </p> */}

              <ReactMarkdown className="text-justify container" 
                source={descriptionMarkdown}
                transformImageUri={uri=>uri.startsWith('http') ? uri:`${process.env.IMAGE_BASE_URL}${uri}`}/>
              
          </div>
          
          {/* Placeholder untuk gambar medium*/}
        
        <div className="col-12">
        {image.map((item)=>{
          return( 
            <div className="card bg-white border-0 mb-5" style={{ mihHeight: "100%" }}>
              <SRLWrapper options={options}>
                <a href={item.url.startsWith('http') ? item.url:`${process.env.IMAGE_BASE_URL}${item.url}`}>  
                  <img src={item.url.startsWith('http') ? item.url:`${process.env.IMAGE_BASE_URL}${item.url}`} alt={title} className="card-img-top3 my-auto mx-auto"/>
                </a>
              </SRLWrapper>  
            </div>
          )
        })}
         
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
