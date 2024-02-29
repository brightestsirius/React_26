import Button from './../Button/Button.js';

var TodosItem = function TodosItem(_ref) {
  var item = _ref.item;
  return React.createElement(
    "li",
    null,
    item,
    " ",
    React.createElement(Button, { text: "Delete" })
  );
};

export default TodosItem;