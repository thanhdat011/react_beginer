import React, { Component } from 'react'

export class UncontrolComponent extends Component {
  constructor(props) {
    super(props)

    this.input = React.createRef()
    this.fileInput = React.createRef()
    this.state = {
      selectedFile: null
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.input)

    const formData = new FormData()
    formData.append('myFile', this.state.selectedFile, this.state.selectedFile.namez)
  }
  handleFileChange = (e) => {
    this.setState({
      selectedFile: e.target.files[0]
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name: <input ref={this.input} />
          </label>
          <input type='file' name='avatar' ref={this.fileInput} onChange={this.handleFileChange} />
          <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}

export default UncontrolComponent
