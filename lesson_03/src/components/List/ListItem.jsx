import React, { Component, PureComponent } from "react";

// dumb component

export default class ListItem extends PureComponent {
//   componentDidMount() {
//     console.log(`in componentDidMount ListItem`);
//   }

//   componentDidUpdate() {
//     console.log(`in componentDidUpdate ListItem`);
//   }

//   componentWillUnmount() {
//     console.log(`in componentWillUnmount ListItem`);
//   }

  render() {
    const { item } = this.props;

    return (
      <li>
        {Array.isArray(item) ? (
          <ul>
            {item.map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          </ul>
        ) : (
          item
        )}
      </li>
    );
  }
}
