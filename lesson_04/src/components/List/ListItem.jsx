import React, { Component } from "react";

import ListItemButton from "./ListItemButton";
import ListItemCheckbox from "./ListItemCheckbox";

export default class ListItem extends Component {
  render() {
    const { item, handleDelete, handleComplete } = this.props;

    return (
      <li key={item.id}>
        {item.title} <ListItemButton handleDelete={handleDelete} />
        <ListItemCheckbox item={item} handleComplete={handleComplete} />
      </li>
    );
  }
}