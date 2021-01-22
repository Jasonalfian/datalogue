import React from "react"
import SocialLinks from "../Constant/SocialLinks"
import arunika from '../../images/arunika.png'
import kemenfo from '../../images/kemenfo.png'

export default function Footer() {
  return (
    <div>
      <footer className="footer py-5">
        <div className="container">

        <div className="row">

        <div className="col-12 col-sm-6 col-md-6 col-lg-5">
              <img src={arunika} alt="arunika"/>
              <img src={kemenfo} alt="arunika"/>
              <p className="mt-1 text-yellow font-weight-bold">Kementerian Museum Data</p>
              <p className="mt-n3 text-yellow">Kemenkoan Komunikasi Kreatif dan Informasi</p>
              <p className="mt-n3 text-yellow">Kabinet "Arunika" KM ITB 2020/2021</p>
        </div>

        
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            
              <p className="mt-0 mt-sm-5 text-yellow font-weight-bold">Contact Person</p>
              <p className="mt-n3 text-yellow">M. Yanza Hattari: yanzahattari (id line)</p>
              <p className="mt-n3 text-yellow">Lidya Jessica: jessica_han03 (id line)</p>
           
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-3">
          <div className="row">
            <div className="text-yellow mx-2 mt-0 mt-sm-5">
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
  )
}
