import React from "react"
import SocialLinks from "../Constant/SocialLinks"

export default function Footer() {
  return (
    <div>
      <footer className="footer py-4">
        <div class="container">
          <div class="row">
            <div class="text-yellow text-center mx-auto">
              
                <SocialLinks/>              
            
            </div>
          </div>
          <div class="row py-3">
            <div class="col-12 col-md-6 text-yellow text-capitalize mx-auto text-center">
              <h3> &copy;{new Date().getFullYear().toString()} Data KM ITB</h3>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
