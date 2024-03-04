import { Component } from "react";
import "./style.sass";

import ListItem from "./ListItem";

export default class ListClass extends Component {
  state = { ...this.props, borderColor: `transparent`, removeItem: null };

  componentDidMount() {
    console.log(`in componentDidMount List`);

    const removeItem = setInterval(() => {
      this.setState(
        {
          list: this.state.list.slice(0, -1),
        },
        () => {
          console.log(this.state.list);

          !this.state.list.length && clearInterval(removeItem);

          if (
            this.state.list.length === Math.round(this.props.list.length / 2)
          ) {
            this.setState({
              borderColor: `red`,
            });
          }
        }
      );
    }, 1000);

    this.setState({ removeItem });
  }

  componentDidUpdate() {
    console.log(`in componentDidUpdate List`);
  }

  componentWillUnmount() {
    console.log(`in componentWillUnmount List`);
    clearInterval(this.state.removeItem);
  }

  render() {
    const { list = [], borderColor } = this.state;

    return list.length ? (
      <ul className="list" style={{ borderColor }}>
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    ) : null;
  }
}
