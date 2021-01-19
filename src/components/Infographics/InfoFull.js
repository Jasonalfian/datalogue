import React from 'react'
import Card2 from '../Globals/Card2'

export default function InfoFull(infographics) {

    return( 
    <section className="pt-3 half-page">
      <div className="container">
        
          <div className="row justify-content-center py-3">
            
            {
              infographics.infographics.map((infographic) => {
              return <Card2 key={infographic.id} {...infographic}/>
            })}

        {/* <Card img={tes}title="Infografis" desc="Memberikan informasi dalam bentuk gambar yang ciamik" path="/Medium"/> */}
        </div>
      </div>
  </section>
 )
}
