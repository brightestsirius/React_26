import axios from 'axios';
const API = `https://jsonplaceholder.typicode.com/todos`;

const todos = {
    get: () => axios(API).then(({data}) => data),
    delete: (id) => axios.delete(API + `/${id}`).then(({data}) => data),
    patch: (id, item) => axios.patch(API+`/${id}`, item).then(({data}) => data),
    put: (id, item) => axios.put(API+`/${id}`, item).then(({data}) => data),
    post: (item) => axios.post(API, item).then(({data}) => data)
}

export default todos;