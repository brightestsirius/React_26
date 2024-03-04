import React, { Component } from 'react'

export default class ListClass extends Component {
    constructor(props){
        super(props);

        // this.state = {...this.props};

        setTimeout(() => {

            this.setState({
                list: this.state.list.slice(0, -1),
                color: `blue`
            })
            
            console.log(this.state.list);
        }, 1000)
    }

    state = {...this.props};

  render() {
    const {list=[], color} = this.state;

    return list.length ? <ul style={{color}}>
        {list.map((item, index) => <li key={index}>{item}</li>)}
    </ul> : null;
  }
}