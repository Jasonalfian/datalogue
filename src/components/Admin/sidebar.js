import React, { useState } from "react"
import { Link } from "gatsby"
import "normalize.css"
import "../../styles/sidebar.css"
import { FaBlackTie } from "react-icons/fa"
const activeStyles = {
  background: "#099c8b",
  color: "black",
}
export default function Siderbar() {
  return (
    <div class="global">
      <div class="sidenav">
        <Link to="/Admin/Datasets" activeStyle={activeStyles}>
          <div class="rest">Dashboard</div>
        </Link>
        <Link to="/Admin/Infographic" activeStyle={activeStyles}>
          <div class="rest">Infographic</div>
        </Link>
        <Link to="/Admin/Category" activeStyle={activeStyles}>
          <div class="rest">Datasets</div>
        </Link>
      </div>
    </div>
  )
}
