import React, { Component } from "react";
import List from "./components/List/List";
import User from "./components/User/User";
import Counter from './components/Counter/Counter'

export default class App extends Component {
  state = {
    list: [`cat`, `dog`, `lion`],
    showList: true,
    user: {
      name: `Taras`,
      age: 50,
      city: `Kyiv`,
    },
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showList: false,
      });
    }, 2000);
  }

  render() {
    const { list, showList, user } = this.state;

    return (
      <>
        <Counter />
      </>
    );
  }
}
