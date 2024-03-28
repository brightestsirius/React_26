import axios from "axios";
const API = `https://restcountries.com/v3.1`;

const service = {
  getRegion: (value) =>
    axios(API + `/region/${value}`).then(({ data }) => data),
  getCountry: (value) =>
    axios(API + `/name/${value}`).then(({ data }) => data),
};

export default service;