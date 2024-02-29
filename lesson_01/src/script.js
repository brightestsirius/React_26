import Todos from './components/Todos/Todos.js';

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);

const x = 10;
const surname = `Sheva`;
const animals = [`cat`, `dog`, `lion`];
const user = {
  name: `Taras`,
  age: 50,
  animals,
};

const List = ({ list = [], color, fs }) => {
  const inlineStyle = { color, fontSize: fs };
  return list.length ? (
    <ul className="list" style={inlineStyle}>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ) : null;
};

root.render(
  <React.Fragment>
    <h1>Hello</h1>
    <h2>Hello</h2>
    <p>
      X: {x} {x + 10} – {surname}
    </p>

    <ul>
      {animals.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>

    <ul>
      {Object.keys(user).map((item) => (
        <li key={item}>
          {item}:{" "}
          {Array.isArray(user[item]) ? (
            <ol>
              {user[item].map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ol>
          ) : (
            user[item]
          )}
        </li>
      ))}
    </ul>

    <List list={animals} />
    <List list={[`Jack`, `Olena`, `Taras`]} color="red" fs="20px" />
    <List />

    <Todos list={animals} />
    <Todos />
  </React.Fragment>
);

// forEach => undefined
// map, filter => []
// reduce => ...
