import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const getImages = async (query, page) => {
  const searchParams = new URLSearchParams({
    key: '39954424-47304ed465a3c8c1a64f1cd2f',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    q: query,
    page: page,
  });
  const resp = await axios.get(`https://pixabay.com/api/?${searchParams}`);

  return resp.data;
};

export default getImages;
