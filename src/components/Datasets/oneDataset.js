import React, { useState } from "react"
import { DataGrid } from "@material-ui/data-grid"
import Button from "@material-ui/core/Button"

const OneDataset = ({ dataset }) => {

    const [value, setValue] = useState(0)
    const { Name, shortDescription, dataests } = dataset[value]

    console.log(dataests.length)

    const rows = []

    for (let i = 0; i < dataests.length; i++) {
        rows[i] = {
            id: dataests[i].id,
            namaDataset: dataests[i].Name,
            penulis: dataests[i].Author,
            tanggalPublikasi: dataests[i].publishedDate,
            linkData: dataests[i].Link
        }
    }

    // for (let i=2;i<15;i++){
    //   rows[i] = {
    //     id:i,
    //     namaDataset: "ayam",
    //     penulis: "ayam",
    //     tanggalPublikasi: "ayam",
    //     linkData: "ayam"
    //   }
    // }


    return ( <
        section className = "section jobs" >
        <
        div className = "jobs-center" >
        <
        div className = "btn-container" >

        { /* Input untuk semua sub category yang ada berdasarkan nama lembaga */ } {
            dataset.map((item, index) => {
                return ( <
                    button key = { item.id }
                    onClick = {
                        () => setValue(index)
                    }
                    className = { `job-btn ${index===value&&"active-btn"}` } > { item.Name } <
                    /button>
                )
            })
        } <
        /div>

        <
        article className = "job-info" >
        <
        h3 className = "font-weight-bold mb-3" > Deskripsi Singkat < /h3>

        { /* Deskripsi singkat dari setiap subcategory */ } <
        p className = "text-justify" > { shortDescription } <
        /p>

        { /* Isi dari table yang menampilkan setiap datasets yang ada */ }

        <
        div className = "col-12 col-sm-12 col-md-12 col-lg-12 my-2" >
        <
        div className = "card bg-white overflow border-0"
        style = {
            { mihHeight: "100%" }
        } >

        <
        div style = {
            { height: 600, width: 900 }
        } >
        <
        DataGrid pageSize = { 10 }
        autoPageSize showToolbar rowsPerPageOptions = {
            [10, 20, 50]
        }
        pagination scrollbarSize = { 15 }
        columns = {
            [
                { field: `id`, hide: true },
                { field: 'namaDataset', headerName: 'Nama Dataset', flex: 0.35 },
                { field: 'penulis', headerName: 'Penulis', flex: 0.25 },
                { field: 'tanggalPublikasi', headerName: 'Tanggal Publikasi', flex: 0.2 },
                {
                    field: 'linkData',
                    headerName: 'Link Data',
                    flex: 0.2,
                    renderCell: (params) => ( <
                        Button variant = "contained"
                        color = "primary"
                        size = "small"
                        href = { params.value }
                        style = {
                            { marginLeft: 0 }
                        } >
                        Visit Dataset <
                        /Button>
                    ),
                },

            ]
        }
        rows = { rows }
        />     < /
        div > <
        /div>  < /
        div >

        {
            /* <div className="col-12 col-sm-12 col-md-12 col-lg-12 my-12">
                    <div className="card bg-white overflow border-0" style={{ mihHeight: "100%" }}>
                    <table class="table table-light mb-4">
                        <thead class ="thead dark">
                          <tr>
                            <th scope="col">Nama Dataset</th>
                            <th scope="col">Penulis</th>
                            <th scope="col">Tanggal publikasi</th>
                            <th scope="col">Link Data</th>
                          </tr>
                        </thead>
                        <tbody>
                        {dataests.map(item=>{
                          return(
                            <tr key={item.id}>
                            <td>{item.Name}</td>
                            <td>{item.Author}</td>
                            <td>{item.publishedDate}</td>
                            <td><a href={item.Link} target="_blank"><button>Visit Dataset</button></a></td>
                          </tr>
                          )
                        })}  
                        </tbody>
                      </table>
                    </div>
                  </div> */
        }



        {
            /* <div class="col-sm-8 ml-n3">
                        <p className="text-justify">
                          Apakah anda tidak puas dan tidak menemukan data yang dicari? Bisa
                          langsung ditanyakan kepada{" "}
                          <span className="font-weight-bold"> Contact Person</span> di bawah
                          ini :
                        </p> */
        }

        { /* Placeholder buat masukin identitas lembaga  */ } {
            /* </div>
                      <h6>Email:</h6>
                      <h6>No Telp:</h6>
                      <h6>Kementerian A</h6> */
        }

        <
        /article> < /
        div > <
        /section>
    )
}

export default OneDataset