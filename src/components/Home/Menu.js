import React from "react"
import { Link } from "gatsby"
import Title from '../Globals/Title'

export default function info() {
  
  return (
    <section className="py-5">
      <div className="container">
          {/* <Title title="Our Story"/> */}
        <div className="row">
          <div className="col-10 col-sm-11 mx-auto text-center">
            <h3 data-sal="slide-up" data-sal-duration="1000" data-sal-easing="ease" className="mb-5 font-weight-bold">
              <span className="oneData">Datalogue</span> adalah website yang dibuat oleh Kemenkoan Komunikasi Kreatif dan Informasi
              KM ITB untuk memfasilitasi integrasi data di ITB dan memberikan akses publik
              terhadap data
            </h3>
            {/* <Link to="/about/">
                <button className="btn text-uppercase btn-yellow"> About Page </button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  )
}
