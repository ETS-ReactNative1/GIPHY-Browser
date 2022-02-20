import axios from 'axios';

const ax = axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs',
  params: {api_key: 'uZuBu6LLo2KrdFZbHKUpLdruaY7aQAj1'},
});
export const getCategoriesWS = async () => {
  const response = await ax.get('categories');

  if (response.data.meta.msg === 'OK')
    return response.data.data.map(el => {
      return {name: el.name, image: el.gif.images.fixed_height_downsampled.url};
    });
  else throw new Error('Fetching data failed');
};

export const getTrendingGifsWS = async (limit, offset) => {
  const response = await ax.get('trending', {
    params: {limit, offset, bundle: 'low_bandwidth'},
  });
  console.log(response);
  if (response.data.meta.msg === 'OK') {
    return response.data.data.map(el => {
      return {id: el.id, image: el.images.fixed_height_downsampled.url};
    });
  } else throw new Error('Fetching data failed');
};
