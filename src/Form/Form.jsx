import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      address: '',
      food: 'coconut',
      married: false
    }
  }

  handleChange = (e) => {
    const { target } = e
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target
    this.setState({ [name]: value })
    console.log(target)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='text' name='name' onChange={this.handleChange} value={this.state.name} />
          </label>
          <textarea name='address' value={this.state.address} onChange={this.handleChange} />
          <select onChange={this.handleChange} name='food' value={this.state.food}>
            <option value='grapefruit'>Grapefruit</option>
            <option value='lime'>Lime</option>
            <option value='coconut'>Coconut</option>
            <option value='mango'>Mango</option>
          </select>
          <input type='checkbox' name='married' value={this.state.married} onChange={this.handleChange} />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default Form
