import React, { Component } from 'react'

import List from './components/List/List'
import User from './components/User/User'

export default class App extends Component {

  state = {
    animals: [`cat`, `dog`, `lion`, [`red`, `blue`, `yellow`], `tiger`],
    showList: true,
    user: {
      name: `Taras`,
      age: 50,
      city: `Kharkiv`
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        showList: false
      })
    }, 7000)
  }

  render() {
    const {animals, showList, user} = this.state;

    return (
      <>
        {/* {showList && <List list={animals} />} */}
        <User user={user} />
      </>
    )
  }
}