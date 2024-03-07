import React, { Component } from "react";
import "./style.sass";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.setValue = this.setValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    counter: 0,
    handleValue: 0
  };

  decrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  setValue(e){
    this.setState({
        handleValue: +e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();

    this.setState({ counter: this.state.handleValue });
  }

  render() {
    const { counter } = this.state;

    return (
      <div className="counter">
        <button onClick={this.decrement}>-</button>
        <span>{counter}</span>
        <button onClick={this.increment}>+</button>

        <form onSubmit={this.handleSubmit}>
            <input type="number" onInput={this.setValue} />
        </form>
        
      </div>
    );
  }
}
