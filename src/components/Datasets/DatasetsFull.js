import React from 'react'
import Card3 from '../Globals/Card3'

export default function DatasetsFull({categories}) {
  
  return( 
    <section className="py-3">
        <div className="container">
      <div className="row justify-content-center py-3">
      {
              categories.map((category) => {
              return <Card3 key={category.id} {...category}/>
            })
           }
       
      </div>
      </div>
  </section>
 )
}