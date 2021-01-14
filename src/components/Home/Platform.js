import React from "react"
import connect from "../../images/connect.png"
import styled from "styled-components"

export default function info() {
  return (
    <section className="py-5 platform">
      <div className="container">
        <HeroH1 className="text-white font-weight-bold">Satu <span className="oneData">Data</span> Satu <span className="oneData">Platform</span></HeroH1>
        <br/>
        <HeroH1 className="text-white font-weight-bold mt-n4">Untuk Publik</HeroH1>
        <div className="row">
          <img className="gifgrafik py-4 mx-auto" imgstyle={{objectFit: "contain"}} alt="" 
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

const HeroH1 = styled.div`
    font-size: clamp(2.5rem, 7vw, 3rem);
    padding: 0 1 rem;
    font-weight:900;
`