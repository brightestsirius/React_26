import React, { Component } from 'react'

export default class App extends Component {

  state = {
    counter: 0,
    color: `red`,
    background: undefined
  }

  componentDidMount(){
    console.log(`in componentDidMount`);

    setTimeout(() => {
      
      this.setState({
        counter: 1,
        background: `green`
      })

    }, 1500)
  }

  componentDidUpdate(){
    console.log(`in componentDidUpdate`);
  }

  componentWillUnmount(){
    console.log(`in componentWillUnmount`);
  }

  render() {
    const {counter, background, color} = this.state;

    return (
      <div style={{background, color}}>{counter}</div>
    )
  }
}