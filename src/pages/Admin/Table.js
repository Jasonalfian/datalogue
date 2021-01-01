import React from "react"
import "../../styles/Table.css"

const UserTable = props => (
  <table className="tbody1">
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr className="t-row" key={user.id}>
            <td className="t-rows">{user.name}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
