import React, { useState, forwardRef } from "react"
import MaterialTable from "material-table"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import AddIcon from "@material-ui/icons/Add"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import SearchIcon from "@material-ui/icons/Search"
import ClearIcon from "@material-ui/icons/Clear"
import FirstPageIcon from "@material-ui/icons/FirstPage"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import SkipNextIcon from "@material-ui/icons/SkipNext"
import LastPageIcon from "@material-ui/icons/LastPage"
import SaveIcon from "@material-ui/icons/Save"
import CancelIcon from "@material-ui/icons/Cancel"
import { SvgIconProps } from "@material-ui/core/SvgIcon"
import "../../styles/tables.css"
const Editable = () => {
  const [columns, setColumns] = useState([
    { title: "Name", field: "name" },
    {
      title: "Surname",
      field: "surname",
      initialEditValue: "initial edit value",
    },
    { title: "Birth Year", field: "birthYear", type: "numeric" },
    {
      title: "Birth Place",
      field: "birthCity",
      lookup: { 34: "Aja", 63: "Aja" },
    },
  ])

  const [data, setData] = useState([
    { name: "Entah", surname: "apa", birthYear: 1987, birthCity: 63 },
    { name: "ntah", surname: "x", birthYear: 2017, birthCity: 34 },
  ])

  return (
    <MaterialTable
      className="MaterialTable"
      title=""
      columns={columns}
      data={data}
      localization={{
        header: {
          actions: "",
        },
      }}
      icons={{ Edit: () => "c" }}
      icons={{
        SortArrow: forwardRef((props, ref) => (
          <ArrowDownwardIcon {...props} ref={ref} />
        )),
        Add: forwardRef((props, ref) => <AddIcon {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <EditIcon {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteIcon {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <SearchIcon {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <SaveIcon {...props} ref={ref} />),
        Cancel: forwardRef((props, ref) => <CancelIcon {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <CancelIcon {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => (
          <ClearIcon {...props} ref={ref} />
        )),
        FirstPage: forwardRef((props, ref) => (
          <FirstPageIcon {...props} ref={ref} />
        )),
        PreviousPage: forwardRef((props, ref) => (
          <SkipPreviousIcon {...props} ref={ref} />
        )),
        NextPage: forwardRef((props, ref) => (
          <SkipNextIcon {...props} ref={ref} />
        )),
        LastPage: forwardRef((props, ref) => (
          <LastPageIcon {...props} ref={ref} />
        )),
      }}
      options={{
        actionsColumnIndex: -1,
      }}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData])

              resolve()
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data]
              const index = oldData.tableData.id
              dataUpdate[index] = newData
              setData([...dataUpdate])

              resolve()
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data]
              const index = oldData.tableData.id
              dataDelete.splice(index, 1)
              setData([...dataDelete])
              resolve()
            }, 1000)
          }),
      }}
    />
  )
}
export { Editable }
