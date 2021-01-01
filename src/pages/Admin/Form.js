import React, { Component, useState } from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import "../../styles/form.css"

export default class Form extends React.Component {
  state = {
    NamaDataset: "",
    NamaDatasetError: "",
    NamaAuthor: "",
    NamaAuthorError: "",
    LinkGoogleDrive: "",
    LinkGoogleDriveError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
  }

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  validate = () => {
    let isError = false
    const errors = {
      NamaDatasetError: "",
      NamaAuthorError: "",
      LinkGoogleDriveError: "",
      emailError: "",
      passwordError: "",
    }

    if (this.state.LinkGoogleDrive.length < 5) {
      isError = true
      errors.LinkGoogleDriveError =
        "LinkGoogleDrive needs to be atleast 5 characters long"
    }

    if (this.state.email.indexOf("@") === -1) {
      isError = true
      errors.emailError = "Requires valid email"
    }

    this.setState({
      ...this.state,
      ...errors,
    })

    return isError
  }

  onSubmit = e => {
    e.preventDefault()
    const err = this.validate()
    if (!err) {
      this.props.onSubmit(this.state)
      // clear form
      this.setState({
        NamaDataset: "",
        NamaDatasetError: "",
        NamaAuthor: "",
        NamaAuthorError: "",
        LinkGoogleDrive: "",
        LinkGoogleDriveError: "",
        email: "",
        emailError: "",
        password: "",
        passwordError: "",
      })
    }
  }

  render() {
    return (
      <form>
        <p className="toptext3">Upload Datasets</p>
        <p className="Datasets-text">Nama Datasets</p>
        <div class="input-form">
          <TextField
            class="textfield-inside"
            fullWidth="true"
            name="NamaDataset"
            hintText="Nama dataset"
            floatingLabelText="Nama dataset"
            value={this.state.NamaDataset}
            onChange={e => this.change(e)}
            errorText={this.state.NamaDatasetError}
            floatingLabelFixed
            InputProps={{ disableUnderline: true }}
          />
        </div>
        <p className="Datasets-text">Author</p>
        <div class="input-form">
          <TextField
            class="textfield-inside"
            fullWidth="true"
            name="NamaAuthor"
            hintText="Nama Author"
            floatingLabelText="Nama Author"
            value={this.state.NamaAuthor}
            onChange={e => this.change(e)}
            errorText={this.state.NamaAuthorError}
            floatingLabelFixed
            InputProps={{ disableUnderline: true }}
          />
        </div>
        <p className="Datasets-text">Link Google Drive</p>
        <div class="input-form">
          <TextField
            class="textfield-inside"
            fullWidth="true"
            name="LinkGoogleDrive"
            hintText="LinkGoogle"
            floatingLabelText=":LinkGoogle"
            value={this.state.LinkGoogleDrive}
            onChange={e => this.change(e)}
            errorText={this.state.LinkGoogleDriveError}
            floatingLabelFixed
            InputProps={{ disableUnderline: true }}
          />
        </div>
        <Button
          variant="contained"
          label="Submit"
          onClick={e => this.onSubmit(e)}
          color="primary"
        >
          Submit
        </Button>
      </form>
    )
  }
}
