import axios from "axios";
const API = `https://jsonplaceholder.typicode.com`;

const service = {
  get: (source, id) =>
    axios(API + `/${source}` + (id ? `/${id}` : ``)).then(({ data }) => data),
};

export default service;
