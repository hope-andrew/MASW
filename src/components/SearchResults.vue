<template lang="html">
  <div class="">
    <ul class="uk-grid uk-text-center">
      <SearchResult v-for="result in searchResults"  :result="result" :key="result.imdbid" />
    </ul>
  </div>
</template>

<script>
import SearchResult from '@/components/SearchResult';

export default {
  name: 'SearchResults',
  props: {
    searchResults: {
      type: Array,
    },
  },
  components: {
    SearchResult,
  },
};
</script>

<style lang="css">
</style>
