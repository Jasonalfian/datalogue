import React from "react"
import SocialLinks from "../Constant/SocialLinks"

export default function Footer() {
  return (
    <div>
      <footer className="footer py-4">
        <div className="container">
          <div className="row">
            <div className="text-yellow text-center mx-auto">
              
                <SocialLinks/>              
            
            </div>
          </div>
          <div className="row py-3">
            <div className="col-12 col-md-6 text-yellow text-capitalize mx-auto text-center">
              <h3> &copy;{new Date().getFullYear().toString()} Data KM ITB</h3>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
