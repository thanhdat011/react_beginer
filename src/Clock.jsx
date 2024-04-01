import React from 'react'

const lists = ['BMW', 'Mec', 'Honda']

const fetchApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lists)
    }, 1000)
  })
}

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      },
      lists: []
    }
    this.date = '31/03/2024'
  }

  componentDidMount() {
    fetchApi().then((res) =>
      this.setState((prevState) => ({
        ...prevState,
        lists: res
      }))
    )
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
    console.log(this.state)
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
