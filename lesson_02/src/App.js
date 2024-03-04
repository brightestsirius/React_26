import React, { Component } from "react";

import ListClass from "./components/List/ListClass";
import User from "./components/User/User";

export default class App extends Component {
  state = {
    animals: [`cat`, `dog`, `lion`, `tiger`, `mouse`],
    showList: true,
    user: {
      name: `Taras`,
      age: 50,
      city: `Kharkiv`
    }
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showList: false,
      });
    }, 3000);
  }

  render() {
    const { animals, showList, user } = this.state;

    return (
      <>
        <User user={user} />
      </>
    );
  }
}
