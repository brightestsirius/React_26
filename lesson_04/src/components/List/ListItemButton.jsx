import React, { Component } from "react";

export default class ListItemButton extends Component {
  render() {
    const { handleDelete } = this.props;
    return <button onClick={handleDelete}>Delete</button>;
  }
}
