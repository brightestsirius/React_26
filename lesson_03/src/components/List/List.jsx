import React, { PureComponent } from "react";
import "./style.sass";

import ListItem from "./ListItem";

// setState({}, ()=>{})

export default class List extends PureComponent {
  state = { ...this.props, color: `black`, borderColor: `transparent` };

  componentDidMount() {
    console.log(`in componentDidMount List`);

    // setTimeout(() => {
    //   this.setState({
    //     list: [...this.state.list, `Jack`],
    //   }, () => {
    //     console.log(this.state.list);

    //     if(this.state.list.length===5){
    //         this.setState({
    //             color: `red`
    //         })
    //     }
    //   });
    // }, 1000);

    const removeItem = setInterval(() => {
      // console.log(`in interval`);

      this.setState(
        {
          list: this.state.list.slice(0, -1),
        },
        () => {
          // console.log(this.state.list);

          if (this.state.list.length === 0) {
            clearInterval(removeItem);
          }

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

    this.setState({
      removeItem,
    });
  }

//   componentDidUpdate() {
//     console.log(`in componentDidUpdate List`);
//   }

  componentWillUnmount() {
    console.log(`in componentWillUnmount List`);

    clearInterval(this.state.removeItem);
  }

  render() {
    const { list = [], color, borderColor } = this.state;

    return list.length ? (
      <ul className="list" style={{ color, borderColor }}>
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    ) : null;
  }
}

// 20:30
