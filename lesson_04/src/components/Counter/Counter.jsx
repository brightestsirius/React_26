import React, { Component } from "react";
import "./style.sass";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.setCounter = this.setCounter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDisable = this.handleDisable.bind(this);
  }

  state = {
    counter: 0,
    inputValue: undefined,
    btnDisabled: false,
  };

  decrement() {
    this.setState(
      (actualState) => ({
        counter: actualState.counter - 1,
      }),
      () => {
        console.log(`in setState callback-fn`, this.state.counter);
      }
    );
  }

  increment() {
    this.setState((actualState) => ({
      counter: actualState.counter + 1,
    }));
  }

  setCounter(event) {
    this.setState({
      inputValue: +event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.handleDisable();

    this.setState(
      (actualState) => ({
        counter: actualState.inputValue,
      }),
      () => {
        setTimeout(() => {
          this.handleDisable();
        }, 1500);
      }
    );
  }

  handleDisable() {
    this.setState((actualState) => ({
      btnDisabled: !actualState.btnDisabled,
    }));
  }

  render() {
    const { counter, btnDisabled } = this.state;

    return (
      <div className="counter">
        <button onClick={this.decrement}>-</button>
        <span>{counter}</span>
        <button onClick={this.increment}>+</button>

        <form onSubmit={this.handleSubmit}>
          <input type="number" onChange={this.setCounter} />
          <button disabled={btnDisabled}>Set counter value</button>
        </form>
      </div>
    );
  }
}