import axios from 'axios';

//const BASE_URL = 'http://localhost:3500';
const BASE_URL = 'https://app-tritonsprime.onrender.com';

export default axios.create({
    baseURL : BASE_URL,
    headers : {
        "Content-Type" : "application/json",
    },
    withCredentials : true
});

