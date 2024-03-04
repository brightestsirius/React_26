import React, { Component } from "react";

export default class User extends Component {
  state = { ...this.props };

  componentDidMount() {
    setTimeout(() => {
     this.setState((prevState) => ({
        user: {...prevState.user, name: `Sheva`}
     }),() => {})
    }, 1000);

    setTimeout(() => {
        this.setState((prevState) => ({
           user: {...prevState.user, age: 100}
        }),() => {})
       }, 1000);

    setTimeout(() => {
    this.setState((prevState) => ({
        user: {...prevState.user, city: `Odesa`}
    }),() => {})
    }, 1000);
  }

  render() {
    const { user = {} } = this.state;

    return (
      <ul>
        {Object.keys(user).map((item, index) => (
          <li key={index}>
            {item}: {user[item]}
          </li>
        ))}
      </ul>
    );
  }
}
