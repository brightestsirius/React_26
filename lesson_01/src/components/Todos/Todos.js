import TodosItem from './../TodosItem/TodosItem.js'

const Todos = ({list=[]}) => {
    return list.length ? <ul>
        {list.map((item, index) => <TodosItem key={index} item={item} />)}
    </ul> : null;
}

export default Todos;