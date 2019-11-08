import React, { Component } from 'react';

class Rando extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    };
    this.makeTimer();
  }

  makeTimer() {
    setInterval(() => {
      let randNum = Math.floor(Math.random() * this.props.maxNum);
      this.setState({ num: randNum });
    }, 1000)
  }

  render() {
    return (
      <h1>Rendering: {this.state.num}</h1>
    )
  }
}

export default Rando
