import React, { Component } from "react";

import todos from "./../../services/todos";
import ListForm from "./ListForm";
import ListItem from "./ListItem";

export default class List extends Component {
  constructor() {
    super();

    this.liftingTodo = this.liftingTodo.bind(this);
  }
  state = {
    list: [],
  };

  async componentDidMount() {
    try {
      let response = await todos.get();

      this.setState({
        list: response.slice(0, 10),
      });
    } catch (err) {
      console.log(err);
    }
  }

  async handleDelete(id) {
    try {
      await todos.delete(id);
      this.setState((actualState) => ({
        list: actualState.list.filter((item) => item.id !== id),
      }));
    } catch (err) {
      console.log(err);
    }
  }

  async handleComplete(item) {
    try {
      let response = await todos.patch(item.id, { completed: !item.completed });

      this.setState((actualState) => ({
        list: actualState.list.map((el) => {
          if (el.id === response.id) el = response;
          return el;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  }

  liftingTodo(value) {
    this.setState((actualState) => ({
      list: [...actualState.list, value],
    }));
  }

  render() {
    const { list } = this.state;

    return (
      <>
        <ListForm liftingTodo={this.liftingTodo} />

        {list.length ? (
          <ul>
            {list.map((item) => (
              <ListItem
                key={item.id}
                item={item}
                handleDelete={() => this.handleDelete(item.id)}
                handleComplete={() => this.handleComplete(item)}
              />
            ))}
          </ul>
        ) : null}
      </>
    );
  }
}