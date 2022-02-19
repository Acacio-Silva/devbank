import axios from 'axios';

const api = axios.create({
    baseURL:'https://devbank-api.herokuapp.com/'
})

export default api;
