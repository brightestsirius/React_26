import TodosItem from './../TodosItem/TodosItem.js';

var Todos = function Todos(_ref) {
    var _ref$list = _ref.list,
        list = _ref$list === undefined ? [] : _ref$list;

    return list.length ? React.createElement(
        'ul',
        null,
        list.map(function (item, index) {
            return React.createElement(TodosItem, { key: index, item: item });
        })
    ) : null;
};

export default Todos;