<template lang="pug">
  .home
    h2 SLIDES
    ul.slides
      li(v-for="(slide, key) in slides" :key="key")
        a(:href="`/${slide.slug}`") {{ slide.title }}
        span {{ slide.date }}
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
