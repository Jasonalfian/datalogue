import React from "react"
import "../../styles/popup.css"

const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <div className="inside-box">
          <div className="close-icons" onClick={props.handleClose}>
            x
          </div>
          {props.content}
        </div>
      </div>
    </div>
  )
}
export default Popup
