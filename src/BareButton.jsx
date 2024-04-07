import React from 'react'

class BareButton extends React.Component {
  //   handleClick = (value) => {
  //     console.log(value)
  //   }

  // Currying
  handleClick = (value) => () => {
    console.log(value)
  }
  render() {
    return (
      <>
        <div onClick={this.handleClick('Add')}>Add</div>
        <div onClick={this.handleClick('Edit')}>Edit</div>
        <div onClick={this.handleClick('Delete')}>Delete</div>
      </>
    )
  }
}

export default BareButton
