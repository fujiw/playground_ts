//import axios from 'axios'
const axios = require('axios')

const get_ip = () => {
  axios
    .get('http://checkip.amazonaws.com/')
    .then((results: any) => {
      console.log(results.data);
    })
    .catch((error: any) => {
      console.log(error.status);
      console.log('failed');
    });
};

get_ip();
