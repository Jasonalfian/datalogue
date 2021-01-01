import React from "react"
import "../../styles/Category.css"
import Siderbar from "../../components/Admin/sidebar"
import Footer from "../../components/Admin/Footer"
import Layout from "../../components/layout"

export default function Category() {
  return (
    <div className="globalcategory">
      <Siderbar />
      <div className="content2">
        <div className="contentinside">
          <p class="toptextc">What do you want to do?</p>
          <div className="flex-grid">
            <div>
              <p class="isi">Upload Datasets</p>
            </div>
            <div>
              <p class="isi">Lihat List Datasets</p>
            </div>
            <div>
              <p class="isi">Tambah Category</p>
            </div>
            <div>
              <p class="isi">Tambah SubCategory</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
