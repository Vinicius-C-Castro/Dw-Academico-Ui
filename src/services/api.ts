import axios from 'axios';

const url = 'http://localhost:3333/alunos'

const api = axios.create({
   baseURL: url,
});

export default api;