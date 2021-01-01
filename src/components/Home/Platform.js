import React from "react"
import connect from "../../images/connect.png"


export default function info() {
  return (
    <section className="py-5 platform">
      <div className="container">
        <h1 className="text-white font-weight-bold">Satu <span className="oneData">Data</span> Satu <span className="oneData">Platform</span></h1>
        <br/>
        <h1 className="text-white font-weight-bold mt-n4">Untuk Publik</h1>
        <div className="row">
          <img className="gifgrafik py-4 mx-auto" imgstyle={{objectFit: "contain"}} 
          style={{ height: "95%", width: "95%" }} src={connect}></img>
        </div>
        <div className="rataKanan">
        <p className="text-white font-weight-bold px-2 grafikdesc" align="right">
        Integrasi data untuk kemudahan  bersama dalam melakukan pencarian. 
        Dengan terkumpulnya seluruh data dalam 1 platform,
         mencari sumber menjadi hal yang sangat singkat dan praktis.
            </p>
        </div>
      </div>
    </section>
  )
}
