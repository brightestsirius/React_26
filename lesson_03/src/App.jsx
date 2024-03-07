import React, { Component } from "react";
import List from "./components/List/List";

export default class App extends Component {
  state = {
    list: [`cat`, `dog`, `lion`],
    showList: true,
  };

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        showList: false
      })
    }, 2000)
  }

  render() {
    const { list, showList } = this.state;

    return <>{showList && <List list={list} />}</>;
  }
}
