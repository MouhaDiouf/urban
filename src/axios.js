import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://localhost:5001/example-project-b9e76/us-central1/api',
});

export default instance;
