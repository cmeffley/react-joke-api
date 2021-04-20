import axios from 'axios';

const url = 'https://official-joke-api.appspot.com/random_joke';

const getRandomJoke = () => new Promise((reject) => {
  axios.get(`${url}`)
    .then((response) => console.warn(response.data))
    .catch((error) => reject(error));
});

export default getRandomJoke;
