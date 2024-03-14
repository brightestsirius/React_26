import axios from 'axios';
const API = `https://jsonplaceholder.typicode.com/todos`;

// fetch(url).then(data => data.json())
// axios(url).then(response => response.data);
// axios(url).then(({data}) => data);

// fetch(url, {method: `DELETE`}).then(data => data.json())
// axios.delete(url).then(({data}) => data);

// fetch(url, {})
// axios.put(url, item).then(({data}) => data);

// axios.post(url, item).then(({data}) => data);

const todos = {
    get: () => axios(API).then(({data}) => data),
    delete: (id) => axios.delete(API + `/${id}`).then(({data}) => data),
    patch: (id, item) => axios.patch(API+`/${id}`, item).then(({data}) => data),
    put: (id, item) => axios.put(API+`/${id}`, item).then(({data}) => data),
    post: (item) => axios.post(API, item).then(({data}) => data)
}

export default todos;