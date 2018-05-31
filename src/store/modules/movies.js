import axios from 'axios';
import CONSTANTS from '@/services/constants';

export default {
  namespaced: true,
  state: {
    movies: [],
    searchTitle: '',
    searchResults: [],
  },
  getters: {

  },
  actions: {
    async getMovies({ commit }) {
      const moviesResponse = await axios.get(CONSTANTS.API_URL);
      if (moviesResponse.status === 200) {
        commit('SET_MOVIES', moviesResponse.data);
      } else {
        console.log('Error ');
      }
      return moviesResponse;
    },
    async searchMovies({ commit }, payload) {
      const moviesResponse = await axios.post(`${CONSTANTS.API_URL}/search`, {
        title: payload,
      })
      if (moviesResponse.status === 200) {
        console.log("movie search response : ", moviesResponse.data.results)
        commit('SET_SEARCH_RESULTS', moviesResponse.data.results)
      } else {
        console.log('Error ');
      }
      return moviesResponse;
    },

  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies;
    },
    SET_SEARCH_RESULTS(state, results) {
      state.searchResults = results;
    },
  },
};
