import React from "react"
import { DataGrid } from "@material-ui/data-grid"
import Button from "@material-ui/core/Button"

const SearchResultDataset = ({ dataset }) => {

    const dataests = dataset

    const rows = []

    for (let i = 0; i < dataests.length; i++) {
        rows[i] = {
            id: dataests[i].id,
            namaDataset: dataests[i].Name,
            penulis: dataests[i].Author,
            tanggalPublikasi: dataests[i].publishedDate.substring(0,4),
            linkData: dataests[i].Link
        }
    }

    return ( 

        // <div className = "jobs-center" >
        // <div className="col-xl-12 col-lg-9 col-12">
        // <article className = "job-info">
        <div className = "container">
        <div className = "col-xl-12 col-lg-9 col-12 my-5" >
        <div className = "card bg-white overflow border-1"
        style = {
            { mihHeight: "100%" }
        } >

        <div style = {
            { height: 700, width: 1075 }
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
         </div>
        // </article> 
        // </div>
        // </div > 

    )
}

export default SearchResultDataset