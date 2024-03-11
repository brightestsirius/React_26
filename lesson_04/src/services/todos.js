const API = `https://jsonplaceholder.typicode.com/todos`;

const todos = {
  get: (id) => fetch(API + (id ? `/${id}` : ``)).then((data) => data.json()),
  delete: (id) =>
    fetch(API + `/${id}`, {
      method: `DELETE`,
    }).then((data) => data.json()),
  patch: (id, item) =>
    fetch(API + `/${id}`, {
      method: `PATCH`,
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json",
      },
    }).then((data) => data.json()),
  post: (item) =>
    fetch(API, {
      method: `POST`,
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json",
      },
    }).then((data) => data.json()),
};

export default todos;
