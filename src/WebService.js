import axios from 'axios';

/**
 * config axios with api_key
 * @type {AxiosInstance}
 */
const ax = axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs',
  params: {api_key: 'uZuBu6LLo2KrdFZbHKUpLdruaY7aQAj1'},
});
/**
 * API call to get main categories
 * map response to desired data
 * @returns {Promise<*>}
 */
export const getCategoriesWS = async () => {
  const response = await ax.get('categories');

  if (response.data.meta.msg === 'OK')
    return response.data.data.map(el => {
      return {name: el.name, image: el.gif.images.fixed_height_downsampled.url};
    });
  else throw new Error('Fetching data failed');
};

/**
 * API call to get trending Gifs
 * @param limit response data limit
 * @param offset for making pagination
 * @returns {Promise<*>}
 */
export const getTrendingGifsWS = async (limit, offset) => {
  const response = await ax.get('trending', {
    params: {limit, offset, bundle: 'low_bandwidth'},
  });
  if (response.data.meta.msg === 'OK') {
    return response.data.data.map(el => {
      return {id: el.id, image: el.images.fixed_height_downsampled.url};
    });
  } else throw new Error('Fetching data failed');
};

/**
 * API call to get searched Gifs
 * @param limit response data limit
 * @param offset for making pagination
 * @param query the search query (category + input)
 * @returns {Promise<*>}
 */
export const getSearchGifsWS = async (limit, offset, query) => {
  const response = await ax.get('search', {
    params: {limit, offset, q: query, bundle: 'low_bandwidth'},
  });
  if (response.data.meta.msg === 'OK') {
    return response.data.data.map(el => {
      return {id: el.id, image: el.images.fixed_height_downsampled.url};
    });
  } else throw new Error('Fetching data failed');
};

/**
 * API call to get Gif by its id
 * @param id Gif id
 * @returns {Promise<{image, title}>}
 */
export const getGifWS = async id => {
  const response = await ax.get(id);
  if (response.data.meta.msg === 'OK') {
    const data = response.data.data;
    return {
      title: data.title,
      image: data.images.downsized.url,
    };
  } else throw new Error('Fetching data failed');
};
