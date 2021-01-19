import React from "react"
import Title from "../Globals/Title"
import ReactMarkdown from "react-markdown"
import {Link} from "gatsby"
import Card5 from "../Globals/Card5"

const back = "< Back"

export default function Medium({descriptionMarkdown ,title, date, author, readtime, imagee, image2, image3}) {
  
  return (
    <div>
      <div className="container ">
        <div className="py-2">

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
        
            <div className="row py-3 mx-2 text-justify">
              <div className="col-12">

              <ReactMarkdown className=""
                source={descriptionMarkdown}
                transformImageUri={uri=>uri.startsWith('http') ? uri:`${process.env.IMAGE_BASE_URL}${uri}`}/>
              </div>
          
          {/* Placeholder untuk gambar medium*/}
        
        <div className="col-12">

            <Card5 image={imagee} image2={image2} image3={image3}/>

          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

