import React, { PureComponent } from "react";

export default class List extends PureComponent {
  state = {
    list: [],
  };

  async componentDidMount() {
    try {
      let request = await fetch(`https://jsonplaceholder.typicode.com/todos`),
        response = await request.json();

      this.setState({
        list: response.slice(0, 10),
      });
    } catch (err) {
      console.log(err);
    }
  }

  async handleDelete(id) {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: `DELETE`,
      });

      this.setState((actualState) => ({
        list: actualState.list.filter((item) => item.id !== id),
      }));
    } catch (err) {
      console.log(err);
    }
  }

  async handleComplete(item){
    try{
        let request = await fetch(`https://jsonplaceholder.typicode.com/todos/${item.id}`, {
            method: `PATCH`,
            body: JSON.stringify({completed: !item.completed}),
            headers: {
                "Content-type": "application/json"
            }
        }),
        response = await request.json();

        this.setState(actualState => ({
            list: actualState.list.map(el => {
                if(el.id === response.id) el=response;
                return el;
            })
        }));

    } catch(err){
        console.log(err);
    }

  }

  render() {
    const { list } = this.state;

    return list.length ? (
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.title}{" "}
            <button onClick={() => this.handleDelete(item.id)}>Delete</button>
            <input type="checkbox" defaultChecked={item.completed} onChange={() => this.handleComplete(item)} />
          </li>
        ))}
      </ul>
    ) : null;
  }
}
