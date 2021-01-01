import React, { useState } from "react"
import "../../styles/categorydata.css"
import Siderbar from "../../components/Admin/sidebar"
import Footer from "../../components/Admin/Footer"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import DropZone from "./upload"
import Popup from "./Popup"
import { useRadioGroup } from "@material-ui/core"
import { PinDropSharp } from "@material-ui/icons"

export default function Categorydata() {
  const [isOpen, setIsOpen] = useState(false)
  const initialFormState = { id: null, name: "" }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="global5">
      <Siderbar />
      <div className="content5">
        <div className="backbutton">
          <Link to="/Admin/Category">&lt; Back</Link>
        </div>
        <p className="toptext5">Tambah Category</p>
        <p className="NamaCategory">Nama Category Baru</p>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!user.name) return
            setUser(initialFormState)
          }}
        >
          <label class="CategoryBaru-label">
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              class="inputNamaCateogry"
              autoComplete="off"
            />
          </label>

          <p className="UploadCover">Upload Cover Image Category Terbaru</p>
          {isOpen && (
            <Popup
              content={
                <>
                  <p className="kategori-berhasil">
                    Category Berhasil Ditambahkan
                  </p>
                  <div className="lihatlistcateg">
                    <Link to="/Admin/Category">Lihat List Category</Link>
                  </div>
                </>
              }
              handleClose={togglePopup}
            />
          )}
          <DropZone />
          <div class="button-bottom">
            <button className="tambah-category" onClick={togglePopup}>
              Tambah Category
            </button>
            <div className="lihatlist">
              <Link to="/Admin/Category">Lihat List Category</Link>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  )
}
