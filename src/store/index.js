import Vue from 'vue';
import Vuex from 'vuex';
import moviesStore from './modules/movies';

Vue.use(Vuex);

const state = {
  movies: [],
};

const getters = {

};

const mutations = {

};

const actions = {

};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    moviesStore,
  },
  strict: 'debug',
});
