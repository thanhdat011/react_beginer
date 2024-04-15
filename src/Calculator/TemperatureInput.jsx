import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TemperatureInput extends Component {
  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value)
  }
  render() {
    const { title, temprature } = this.props
    return (
      <fieldset>
        <legend>Enter Temperature in {title}</legend>
        <input value={temprature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

TemperatureInput.propTypes = {
  onTemperatureChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  temprature: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default TemperatureInput
