import actions from './actions'

const initialState = {
  todos: [],
  newTodo: {
    title: `lorem ipsum`
  }
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case actions.GET_TODOS:
     return {...state, todos: payload}
    case actions.TODOS_ITEM_DELETE:
      return {...state, todos: state.todos.filter(item => item.id !== payload)}
    case actions.TODOS_ITEM_CHANGE:
      return {...state, todos: state.todos.map(item => {
        if(item.id === payload.id) item = payload;
        return item;
      })}
    case actions.NEW_TODO_TITLE:
      return {...state, newTodo: {...state.newTodo, title: payload}}
    case actions.ADD_NEW_TODO:
      return {...state, todos: [...state.todos, payload]};
    default:
      return state;
  }
};

export { reducer, initialState };