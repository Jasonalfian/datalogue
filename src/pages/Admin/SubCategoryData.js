import React, { useState } from "react"
import "../../styles/subcategorydata.css"
import Siderbar from "../../components/Admin/sidebar"
import Footer from "../../components/Admin/Footer"
import Layout from "../../components/layout"
import { Link } from "gatsby"

const option1 = ["Kementrian A", "Kementrian B", "Kementrian C"]

export default function Categorydata() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = value => () => {
    setSelectedOption(value)
    setIsOpen(false)
    console.log(selectedOption)
  }
  return (
    <div className="global6">
      <Siderbar />
      <div className="content6">
        <div className="backbutton">
          <Link to="/Admin/Category">&lt; Back</Link>
        </div>
        <p className="toptext5">Tambah SubCategory</p>
        <p className="NamaSubCategory">Nama SubCategory Baru</p>
        <form>
          <label class="CategoryBaru-label">
            <input
              type="text"
              name="NamaCategoryBaru"
              class="inputNamaCateogry"
              autoComplete="off"
            />
          </label>
        </form>
        <div class="Dropdown-containerCategory">
          <button
            type="button"
            class="button-categoryData"
            onClick={() => toggling("category")}
          >
            <div className="selectionop">
              {selectedOption || "Kementrian A"}
            </div>
            <svg
              className="segitigabawah"
              width="18"
              height="14"
              viewBox="0 0 23 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 19L0.674682 0.25L22.3253 0.250002L11.5 19Z"
                fill="black"
              />
            </svg>
          </button>
          {isOpen && (
            <div class="List-ContainerCategory">
              <ul class="DropDownListCateg">
                {option1.map(option => (
                  <li class="ListItem2" onClick={onOptionClicked(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button className="tambahsub">Tambah SubCategory</button>
        <div className="lihatlistsub">
          <Link to="/Admin/Category">Lihat List SubCategory</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
