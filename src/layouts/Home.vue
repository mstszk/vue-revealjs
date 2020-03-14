<template lang="pug">
  .home
    h2 SLIDES
    ul.slides
      li(v-for="(slide, key) in slides" :key="key")
        a(:href="`/${slide.slug}`") {{ slide.title }}
        p {{ slide.date }}
</template>

<script>
import moment from 'moment'

export default {
  computed: {
    slides() {
      const files = require.context('../../slides/', true, /index\.md$/)
      return files.keys().map(key => {
        const slide = files(key).attributes
        const slug = key.split('/').slice(-2, -1)[0]
        slide.slug = slug
        return slide
      }).sort((a, b) => {
        return moment(b.date, 'YYYY/MM/DD').diff(moment(a.date, 'YYYY/MM/DD'))
      })
    }
  }
}
</script>

<style lang="stylus">
.home
  padding 2rem
  h2
    font-size 1.4rem
    font-weight bold
    margin-bottom 1rem
    user-select none

  .slides li
    list-style none
    padding-left .5rem
    a
      font-weight bold
      transition opacity .3s
      color $mainColor
      &:hover
        opacity .6
    p
      font-size .8rem
      opacity .8
      user-select none
    &:not(:last-child)
      padding-bottom .5rem
      margin-bottom .5rem
      border-bottom 1px solid lightgray
</style>
