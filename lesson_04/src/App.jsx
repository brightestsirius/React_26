import React, { Component } from 'react'

import Counter from './components/Counter/Counter'
import List from './components/List/List'

export default class App extends Component {
  render() {
    return (
      <>
        <Counter />
        <List />
      </>
    )
  }
}