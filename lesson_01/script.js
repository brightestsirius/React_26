import Todos from './components/Todos/Todos.js';

var domContainer = document.querySelector("#root");
var root = ReactDOM.createRoot(domContainer);

var x = 10;
var surname = "Sheva";
var animals = ["cat", "dog", "lion"];
var user = {
  name: "Taras",
  age: 50,
  animals: animals
};

var List = function List(_ref) {
  var _ref$list = _ref.list,
      list = _ref$list === undefined ? [] : _ref$list,
      color = _ref.color,
      fs = _ref.fs;

  var inlineStyle = { color: color, fontSize: fs };
  return list.length ? React.createElement(
    "ul",
    { className: "list", style: inlineStyle },
    list.map(function (item, index) {
      return React.createElement(
        "li",
        { key: index },
        item
      );
    })
  ) : null;
};

root.render(React.createElement(
  React.Fragment,
  null,
  React.createElement(
    "h1",
    null,
    "Hello"
  ),
  React.createElement(
    "h2",
    null,
    "Hello"
  ),
  React.createElement(
    "p",
    null,
    "X: ",
    x,
    " ",
    x + 10,
    " \u2013 ",
    surname
  ),
  React.createElement(
    "ul",
    null,
    animals.map(function (item, index) {
      return React.createElement(
        "li",
        { key: index },
        item
      );
    })
  ),
  React.createElement(
    "ul",
    null,
    Object.keys(user).map(function (item) {
      return React.createElement(
        "li",
        { key: item },
        item,
        ":",
        " ",
        Array.isArray(user[item]) ? React.createElement(
          "ol",
          null,
          user[item].map(function (el, index) {
            return React.createElement(
              "li",
              { key: index },
              el
            );
          })
        ) : user[item]
      );
    })
  ),
  React.createElement(List, { list: animals }),
  React.createElement(List, { list: ["Jack", "Olena", "Taras"], color: "red", fs: "20px" }),
  React.createElement(List, null),
  React.createElement(Todos, { list: animals }),
  React.createElement(Todos, null)
));

// forEach => undefined
// map, filter => []
// reduce => ...