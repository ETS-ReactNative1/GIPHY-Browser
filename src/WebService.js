import axios from 'axios';

const ax = axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs',
  headers: {api_key: 'uZuBu6LLo2KrdFZbHKUpLdruaY7aQAj1'},
});

export const getCategoriesWS = () => {
  ax.get('categories')
    .then(res => {
      console.log('success', res);
    })
    .catch(error => {
      console.log('fail', error);
    });
};
