import React, { useState, Fragment } from "react"
import UserTable from "./Table"
import EditUserForm from "./edituser"
import Categorydata from "./Categorydata"
import "../../styles/list.css"
import Siderbar from "../../components/Admin/sidebar"
import Footer from "../../components/Admin/Footer"
export default function Listdata() {
  const usersData = [
    { id: 1, name: "sub1" },
    { id: 2, name: "sub2" },
    { id: 3, name: "sub3" },
  ]
  const initialFormState = { id: null, name: "", username: "" }

  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setEditing(false)

    setUsers(users.filter(user => user.id !== id))
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const editRow = user => {
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }
  return (
    <div className="global-8">
      <Siderbar />
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>{/* <AddUserForm addUser={addUser} /> */}</Fragment>
          )}
        </div>
        <div className="flex-large">
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
