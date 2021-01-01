import React from 'react'
import Card3 from '../Globals/Card3'
import dataset from '../../images/dataset.png'
import { CategorySharp } from '@material-ui/icons'
import { DataGrid, RowsProp, ColDef } from '@material-ui/data-grid'

export default function DatasetsFull({categories}) {
  
  // console.log(categories[0].logodark.internal.description)


  return( 
    <section className="py-5">
        <div className="container">
      <div class="row justify-content-center py-3">
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