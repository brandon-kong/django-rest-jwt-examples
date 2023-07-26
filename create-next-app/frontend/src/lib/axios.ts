import ax from 'axios';

const axios = ax.create({
    baseURL: 'http://localhost:8000/',
})

const localAxios = ax.create({
    baseURL: 'http://localhost:3000/api/',
})

export default axios;
export { localAxios };