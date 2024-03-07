import React, { PureComponent } from "react";

export default class ListItem extends PureComponent {
  componentDidMount(){
    console.log(`in componentDidMount ListItem`);
  }

  componentDidUpdate(){
    console.log(`in componentDidUpdate ListItem`);
  }

  componentWillUnmount(){
    console.log(`in componentWillUnmount ListItem`);
  }

  render() {
    const { item } = this.props;

    return <li>{item}</li>;
  }
}