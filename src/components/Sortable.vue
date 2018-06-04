<template lang="html">
  <div class="sortable">
    <draggable v-model="movies" @start="drag=true" @end="drag=false">
      <div v-for="movie in movies" :key="movie.imdbid.S">{{movie.title.S}}</div>
    </draggable>
    <hr>
    <section>
      <!-- <input type="text" name="newEntry" :value="newEntry" @input="updateList"> -->
    </section>
    <section>
      <form @submit.prevent="submitTitleSearch">
        <input required type="text" v-model="searchTitleInput" placeholder="search a title">
        <button type="submit" name="button">Search Title</button>
      </form>
    </section>
    <section>
      <button type="button" name="button" @click="requestMovies">Request Movies</button>
    </section>
    <div class="uk-grid-small uk-child-width-expand@s uk-display-block">
      <div class="uk-card uk-card-default">
        <h1>Card 1</h1>
      </div>
      <div class="uk-card uk-card-default">
        <h1>Card 2</h1>
      </div>
      <div class="uk-card uk-card-default">
        <h1>Card 3</h1>
      </div>
    </div>

    <SearchResults :searchResults="searchResults"></SearchResults>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import SearchResults from '@/components/SearchResults';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Sortable',
  data() {
    return {
      searchTitleInput: '',
    };
  },
  components: {
    draggable,
    SearchResults,
  },
  computed: {
    ...mapState('moviesStore', ['movies', 'searchResults']),
  },
  methods: {
    ...mapActions('moviesStore', ['getMovies', 'searchMovies']),
    async requestMovies() {
      const movies = await this.getMovies();
      console.log('movies response : ', movies);
    },
    async submitTitleSearch() {
      console.log(this.searchTitleInput);
      const searchResults = await this.searchMovies(this.searchTitleInput);
      console.log(searchResults);
    },
  },
  created() {
    this.requestMovies();
  },
};
</script>

<style lang="css">
  .sortable {

  }
  .uk-card {
    background-color: #E0E0E0;
  }
</style>
