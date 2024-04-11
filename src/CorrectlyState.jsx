import React from 'react'

const fetchApi = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(['a', 'b', 'c']), 1000)
  })

class CorrectlyState extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      comments: []
    }
  }
  componentDidMount() {
    console.log('this.state.count')
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
    fetchApi().then((res) => {
      this.setState({
        comments: res
      })
    })
  }
  render() {
    console.log(this.state)
    return <div>CorrectlyState. Count: {this.state.count}</div>
  }
}

export default CorrectlyState
