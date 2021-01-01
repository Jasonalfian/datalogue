import React, { useState } from "react"
import "../../styles/listdata.css"
import Siderbar from "../../components/Admin/sidebar"
import Footer from "../../components/Admin/Footer"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import CancelIcon from "@material-ui/icons/Cancel"
import { Editable } from "./tables"
const useStyles = makeStyles({
  tablecontainer: {
    width: "100%",
    marginTop: "30px",
    boxShadow: "none",
  },
  table: {
    minWidth: 450,
    width: "650px",
  },
  TableHead: {
    height: "350px",
  },
})

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "white",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(n+1)": {
      backgroundColor: "#F1F2F2",
    },
    borderBottom: "2gatspx solid black",
  },
}))(TableRow)

function createData(no, name, author, date, category, subcategory, link) {
  return { no, name, author, date, category, subcategory, link }
}

const rows = [
  createData(
    "1",
    "anda",
    "dia",
    "23 januari 2002",
    "tidak",
    "ada",
    "google.com"
  ),
  createData(
    "2",
    "anda",
    "dia",
    "23 januari 2002",
    "tidak",
    "ada",
    "google.com"
  ),
  createData(
    "3",
    "anda",
    "dia",
    "23 januari 2002",
    "tidak",
    "ada",
    "google.com"
  ),
  createData(
    "4",
    "anda",
    "dia",
    "23 januari 2002",
    "tidak",
    "ada",
    "google.com"
  ),
  createData(
    "5",
    "anda",
    "dia",
    "23 januari 2002",
    "tidak",
    "ada",
    "google.com"
  ),
]
export default function ListOfData() {
  const classes = useStyles()
  const [data, setData] = useState([])
  const [editIdx, seteditIdx] = useState(-1)

  const handleRemove = i => {
    data = data.filter((tables, j) => j !== i)
  }

  const startEditing = i => {
    seteditIdx = i
  }

  const stopEditing = () => {
    seteditIdx = -1
  }

  const handleChange = (e, name, i) => {
    const { value } = e.target
  }
  return (
    <div className="global4">
      <Siderbar />
      <div className="content7">
        <div className="backbuttons">
          <Link to="/Admin/Category">&lt; Back</Link>
        </div>
        <p className="toptext4">Lihat List Datasets</p>
        {/* <TableContainer className={classes.tablecontainer} component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>No</StyledTableCell>
                <StyledTableCell align="right">Nama</StyledTableCell>
                <StyledTableCell align="right">Author</StyledTableCell>
                <StyledTableCell align="right">Date Created</StyledTableCell>
                <StyledTableCell align="right">Category</StyledTableCell>
                <StyledTableCell align="right">SubCategory</StyledTableCell>
                <StyledTableCell align="right">Link</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <StyledTableRow key={row.no}>
                  <StyledTableCell component="th" scope="row">
                    {row.no}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.name}</StyledTableCell>
                  <StyledTableCell align="right">{row.author}</StyledTableCell>
                  <StyledTableCell align="right">{row.date}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.category}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.subcategory}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.link}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> */}
        <Editable />
        <Footer />
      </div>
    </div>
  )
}
