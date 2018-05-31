<template lang="html">
    <div class="uk-card uk-flex uk-card-default uk-card-body uk-width-1-1@m uk-width-1-1@s uk-width-1-1@xs">

      <div class="poster uk-image uk-width-1-3@m">
        <img :src="posterUrl" :alt="`${result.title}`">
      </div>
      <div class="title uk-width-2-3@m uk-align-right">
        <h1 class="">{{result.title}}</h1>
        <h3 class="">{{result.year}}</h3>
        <p>{{result.imdbid}}</p>
      </div>
    </div>
</template>

<script>
import CONSTANTS from '@/services/constants';
export default {
  name: 'SearchResult',
  props: {
    result: {
      type: Object,
    },
  },
  computed: {
    posterUrl() {
      const imdbUrlRegex = /https:\/\/.*.com\/.*/ ;
      return imdbUrlRegex.test(this.result.poster) ? this.result.poster : CONSTANTS.DEFAULT_POSTER_URL
    }
  }
}
</script>

<style lang="scss">
.poster {
  max-width: 200px;
}
</style>
