import React from 'react'
import Card from '../Globals/Card'
import infografis from '../../images/infografis.png'
import dataset from '../../images/dataset.png'

export default function Fact() {
    return( 
    <section className="py-5 fact">
    <div className="container">
      <div class="mb-3">
      <h1 className="oneData font-weight-bold">Not just a fact, but</h1>
      <br/>
      <h1 className="oneData font-weight-bold mt-n4">useful readable information</h1>
    </div>
      <div class="row py-3">
        <Card img={infografis}title="Infographics" desc="Infographics adalah bentuk representasi data menggunakan visual grafis. Di bagian ini Anda dapat menemukan bentuk representasi data yang menarik tetapi edukatif." home="yes" path="/Infographics"/>
        <Card img={dataset} title="Datasets" desc="Datasets adalah kumpulan data untuk menjelaskan informasi secara lengkap dan mendetail. Di bagian ini Anda dapat menemukan data-data dalam bentuk spreadsheet." home="yes" path="/Datasets"/>
      </div>
    </div>
  </section>
 )
}
