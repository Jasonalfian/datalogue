import React from 'react'

export default function Kontak() {
    return (
        <div className="homeSearch2 d-flex align-items-center">
      <div className="container">
          {/* <Title title="Our Story"/> */}
        <div className="row">
          <div className="col-10 col-sm-11 mx-auto text-center">
            <p className="text-white mb-4">
                Apakah anda tidak puas dan tidak menemukan data yang dicari?
                <br/>
                Bisa langsung ditanyakan kepada <span className="font-weight-bold">Contact Person</span> di bawah ini :
            </p>
            <p className="mb-2 text-white">
                Email: <span className="font-weight-bold">data@km.itb.ac.id</span> 
                <br/>
                Instagram: <span className="font-weight-bold">https://instagram.com/km.itb/</span> 
            </p>

            {/* Untuk input searchbar */}
            {/* <input type="search" className="form-control mt-3 heightSearch" placeholder="Cari datasets dan poster disini"/> */}
          </div>
        </div>
      </div>
        </div>
    )
}
