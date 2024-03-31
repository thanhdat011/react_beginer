import React from 'react'

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      }
    }
    this.date = '31/03/2024'
  }

  getTime = () => {
    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleTimeString()
      }
    }

    this.setState(newState)
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It's {this.state.time.created}</h2>
        <h2>It's {this.date}</h2>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    )
  }
}
