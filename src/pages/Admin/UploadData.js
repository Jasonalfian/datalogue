import React, { Component, useState } from "react"
import styled from "styled-components"
import "../../styles/UploadData.css"
import Siderbar from "../../components/Admin/sidebar"
import Footer from "../../components/Admin/Footer"
import Layout from "../../components/layout"
import App from "./upload"

const option1 = ["Mangoes", "Apples", "Oranges"]
const option2 = ["banana", "orange", "pisang"]

export default function UploadData(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [selectedOption2, setSelectedOption2] = useState(null)

  const [values, setValues] = useState({
    Datasets: "",
    Author: "",
    Link: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const handleDatasetsChange = e => {
    e.persist()
    setValues(values => ({
      ...values,
      Datasets: e.target.value,
    }))
  }
  const handleAuthorChange = e => {
    e.persist()
    setValues(values => ({
      ...values,
      Author: e.target.value,
    }))
  }
  const handleLinkChange = e => {
    e.persist()
    setValues(values => ({
      ...values,
      Link: e.target.value,
    }))
  }
  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    console.log("udahmasuk")
  }
  const toggling = target =>
    target == "category"
      ? [setIsOpen(!isOpen), setIsOpen2(false)]
      : setIsOpen2(!isOpen2)

  const onOptionClicked = value => () => {
    setSelectedOption(value)
    setIsOpen(false)
    console.log(selectedOption)
  }
  const onOptionClicked2 = value => () => {
    setSelectedOption2(value)
    setIsOpen2(false)
    console.log(selectedOption2)
  }

  return (
    <Layout>
      <div className="global3">
        <Siderbar />
        <div className="content3">
          <div className="Datasets-form">
            <p className="toptext3">Upload Datasets</p>
            <form>
              <label>
                <p className="Datasets-text">Nama Datasets</p>
                <input
                  type="text"
                  name="Datasets"
                  class="input-form"
                  autoComplete="off"
                  value={values.Datasets}
                  onChange={handleDatasetsChange}
                />
              </label>
            </form>
            <form>
              <label>
                <p className="Datasets-text">Author</p>
                <input
                  type="text"
                  name="Author"
                  class="input-form"
                  autoComplete="off"
                  value={values.Author}
                  onChange={handleAuthorChange}
                />
              </label>
            </form>
            <form>
              <label>
                <p className="Datasets-text">Link Google Drive</p>
                <input
                  type="text"
                  name="Link"
                  class="input-form"
                  autoComplete="off"
                  value={values.Link}
                  onChange={handleLinkChange}
                />
              </label>
              <div className="Dropdown-container">
                <p className="categ">Category</p>
                <button
                  type="button"
                  class="button-category"
                  onClick={() => toggling("category")}
                >
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
                  {selectedOption || "Mangoes"}
                </button>
                {isOpen && (
                  <div class="List-Container">
                    <ul class="DropDownList">
                      {option1.map(option => (
                        <li class="ListItem" onClick={onOptionClicked(option)}>
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <p className="subcateg">Sub Category</p>

                <button
                  type="button"
                  class="button-category"
                  onClick={() => toggling("sub-category")}
                >
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
                  {selectedOption2 || "Angur"}
                </button>
                {isOpen2 && (
                  <div class="List-Container">
                    <ul class="DropDownList">
                      {option2.map(option => (
                        <li class="ListItem" onClick={onOptionClicked2(option)}>
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </form>
            <button
              className="upload-data"
              type="submit"
              onClick={handleSubmit}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
