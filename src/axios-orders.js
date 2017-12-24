import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-c50ae.firebaseio.com/'
});

export default instance;