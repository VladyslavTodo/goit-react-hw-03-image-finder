import axios from 'axios';

const API_KEY = '36218238-9f9ebba5e408fb2e6d1a3e335';

axios.defaults.baseURL = 'https://pixabay.com';

export const getImagesApi = async (query, page) => {
	const response = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
	return response.data
};
