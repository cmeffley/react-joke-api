import axios from 'axios';

const url = 'https://official-joke-api.appspot.com/random_ten';

const getRandomJoke = () => new Promise((resolve, reject) => {
  axios.get(`${url}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getRandomJoke;
