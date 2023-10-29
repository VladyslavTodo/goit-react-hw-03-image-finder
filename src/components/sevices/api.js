import axios from 'axios';

const API_KEY = '36218238-9f9ebba5e408fb2e6d1a3e335';

axios.defaults.baseURL = 'https://pixabay.com';

const getImagesApi = async (query, page = 1) => {
  const response = await axios.get('/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      page,
      per_page: 12,
      orientation: 'horizontal',
    },
  });

  return response.data;
};

export default getImagesApi;
