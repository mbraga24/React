import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ""
    }

    this.handleChange = this.handleChange.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this);  
  }

  handleChange(event) {
    this.setState({ username: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    alert("Your name is: " + this.state.username)
    this.setState({ username: "" })
  }

  render() {
    return (
      <div>
        <h1>Form Demo</h1>
        <form onSubmit={this.handleSubmit}>
          <p>What is your name?</p>
          <input type="text" value={this.state.username} onChange={this.handleChange}/>
          <button> Add</button>
        </form>
      </div>
    )
  }
}

export default Form