import React, { Component } from "react";
import todos from "./../../services/todos";

export default class ListForm extends Component {
  constructor(props) {
    super(props);

    this.handleTodoTitle = this.handleTodoTitle.bind(this);
    this.handleTodoCompleted = this.handleTodoCompleted.bind(this);
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
  }

  state = {
    todoTitle: ``,
    todoCompleted: false,
  };

  handleTodoTitle(e) {
    this.setState({
      todoTitle: e.target.value,
    });
  }

  handleTodoCompleted(e) {
    this.setState({
      todoCompleted: e.target.checked,
    });
  }

  async handleTodoSubmit(e) {
    e.preventDefault();
    const todo = {
      title: this.state.todoTitle,
      completed: this.state.todoCompleted,
    };
    const newTodo = await todos.post(todo);

    this.props.liftingTodo(newTodo);
  }

  render() {
    return (
      <form onSubmit={this.handleTodoSubmit}>
        <label>
          Title: <input type="text" onChange={this.handleTodoTitle} />
        </label>
        <label>
          Completed:{" "}
          <input type="checkbox" onChange={this.handleTodoCompleted} />
        </label>
        <button>Add todo</button>
      </form>
    );
  }
}
