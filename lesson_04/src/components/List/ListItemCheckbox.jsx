import React, { Component } from "react";

export default class ListItemCheckbox extends Component {
  render() {
    const { item, handleComplete } = this.props;
    return (
      <input
        type="checkbox"
        defaultChecked={item.completed}
        onChange={handleComplete}
      />
    );
  }
}
