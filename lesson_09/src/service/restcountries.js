import axios from 'axios';

const API = `https://restcountries.com/v3.1`;

const service = {
    getCountries: region => axios(API+`/region/${region}`).then(({data}) => data),
    getCountry: country => axios(API+`/name/${country}`).then(({data}) => data),
}

export default service;