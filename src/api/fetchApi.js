import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c63e4d3fe5eb4a31f62c83bce29dfebb';

export const fetchApiTreding = () => {
  return axios.get(`${BASE_URL}/trending/movie/week`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchApiMovieDetails = id => {
  return axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchApiMovieCast = id => {
  return axios.get(`${BASE_URL}/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
};
export const fetchApiMovieReviews = id => {
  return axios.get(`${BASE_URL}/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
};
export const fetchApiSearch = search => {
  return axios.get(`${BASE_URL}/search/movie`, {
    params: {
      query: search,
      api_key: API_KEY,
    },
  });
};
