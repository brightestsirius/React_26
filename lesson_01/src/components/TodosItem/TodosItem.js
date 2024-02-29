import Button from './../Button/Button.js'

const TodosItem = ({item}) => <li>{item} <Button text={"Delete"} /></li>

export default TodosItem;