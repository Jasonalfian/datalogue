import React from "react"
import "../../styles/Infographic.css"
import Siderbar from "../../components/Admin/sidebar"
import Footer from "../../components/Admin/Footer"

export default function Infographic() {
  return (
    <div className="global">
      <Siderbar />
      <div className="content">
        <div className="inside">
          <p className="ha1">What do you want to do?</p>
          <div className="BoxContainer">
            <button className="Box1">Lihat List Infographic</button>
            <button className="Box2">Upload Infographic</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
