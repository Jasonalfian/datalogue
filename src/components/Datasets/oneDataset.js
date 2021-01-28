import React, { useState } from "react"
import { DataGrid } from "@material-ui/data-grid"
import Button from "@material-ui/core/Button"

const OneDataset = ({ dataset }) => {

    const [value, setValue] = useState(0)
    const {shortDescription, dataests } = dataset[value]

    const rows = []

    for (let i = 0; i < dataests.length; i++) {
        rows[i] = {
            id: dataests[i].id,
            namaDataset: dataests[i].Name,
            penulis: dataests[i].Author,
            tanggalPublikasi: (dataests[i].publishedDate).substring(0,4),
            linkData: dataests[i].Link
        }
    }

    return ( 
        <section className = "section jobs">
        <div className = "jobs-center" >
        <div className = "center">
        <div className = "btn-container" >

        { /* Input untuk semua sub category yang ada berdasarkan nama lembaga */ } {
            dataset.map((item, index) => {
                return ( 
                    <button 
                    key = { item.id }
                        onClick = {
                        () => setValue(index)
                        }
                    className = { `job-btn ${index===value&&"active-btn"}` } 
                    > { item.Name } </button>
                )
            })
        } 
        </div>
        </div>

        <div className="col-xl-12 col-lg-9 col-12">
        <article className = "job-info">
        <h3 className = "font-weight-bold mb-3" > Deskripsi Singkat </h3>

        { /* Deskripsi singkat dari setiap subcategory */ } 
        <p className = "text-justify mb-3" > { shortDescription } </p>

        { /* Isi dari table yang menampilkan setiap datasets yang ada */ }

        <div className = "col-12 col-sm-12 col-md-12 col-lg-12 my-4" >
        <div className = "card bg-white overflow border-1"
        style = {
            { mihHeight: "100%" }
        } >

        <div style = {
            { height: 700, width: 1000 }
        } >
        <DataGrid pageSize = { 10 }
        showToolbar rowsPerPageOptions = {
            [10, 20, 50]
        }
        pagination scrollbarSize = { 15 }
        columns = {
            [
                { field: `id`, hide: true },
                { field: 'namaDataset', headerName: 'Nama Dataset', flex: 0.45 },
                { field: 'penulis', headerName: 'Penulis', flex: 0.3 },
                { field: 'tanggalPublikasi', headerName: 'Tahun', flex: 0.1 },
                {
                    field: 'linkData',
                    headerName: 'Link Data',
                    flex: 0.15,
                    renderCell: (params) => ( <
                        Button variant = "contained"
                        color = "primary"
                        size = "small"
                        href = { params.value }
                        target = "_blank"
                        rel= "noopener noreferrer"
                        style = {
                            { marginLeft: 0 }
                        } >
                        Visit Dataset </Button>
                    ),
                },

            ]}
        rows = { rows }/>    
         </div> 
         </div>  
         </div>
        </article> 
        </div>
        </div > 
        </section>
    )
}

export default OneDataset