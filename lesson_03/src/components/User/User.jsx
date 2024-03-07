import React, { Component } from "react";

// setState((actualState) => ({user: {...actualState.user, name: `Jack`}}), () => {})

// setState({}, ()={} )
// setState(()=>{}, ()=>{})
// setState( (actualState)=>{ return {key: actualState.key+1} } )

export default class User extends Component {
  state = { ...this.props };

  componentDidMount(){
    setTimeout(() => {
        this.setState(actualState => ({
            user: {...actualState.user, name: `Sheva`}
        }))
    }, 1000);

    setTimeout(() => {
        this.setState((actualState)=>{
            return {
                user: {...actualState.user, age: 100}
            }
        })
    }, 1000);

    setTimeout(() => {
        this.setState((actualState) => ({
            user: {...actualState.user, city: `Odesa`}
        }))
    }, 1000);

  }

  render() {
    const { user = {} } = this.state;

    return Object.keys(user).length ? (
      <ul>
        {Object.keys(user).map((item, index) => (
          <li key={index}>
            {item}: {user[item]}
          </li>
        ))}
      </ul>
    ) : null;
  }
}
