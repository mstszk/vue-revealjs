<template lang="pug">
  .cover-container
    .title-container
      h1.title(v-if="attrs.title") {{ attrs.title }}
      .subtitle(v-if="attrs.subtitle") {{ attrs.subtitle }}
    hr
    .items-container
      .author(v-if="attrs.author") {{ attrs.author }}
      .date {{ date }}
      .institute(v-if="attrs.institute") {{ attrs.institute }}
</template>

<script>
export default {
  data () {
    const slug = this.$route.path.slice(1)
    return {
      attrs: require(`../../../slides/${slug}/index.md`).attributes,
    }
  },
  computed: {
    date() {
      if (this.attrs.date) return this.attrs.date
      if (this.attrs.date === false) return ''
      const today = new Date()
      const dd = String(today.getDate()).padStart(2, '0')
      const mm = String(today.getMonth() + 1).padStart(2, '0')
      const yyyy = today.getFullYear()
      return `${yyyy}/${mm}/${dd}`
    }
  }
}
</script>

<style lang="stylus">
.cover-container
  position relative
  padding-left 2.5em
  padding-right 2.5em
  box-sizing border-box
  height 100%
  width 100%
  text-align left

  .title-container
    position absolute
    padding inherit
    box-sizing border-box
    left 0
    width 100%
    bottom 50%
    margin-bottom 2.5em
    .title
      font-size 2em
      font-weight 500
    .subtitle
      margin-top .75em
      font-size 1.4em
      color lighten($textColor, 20%)

  hr
    position absolute
    left 2.5em
    right 2.5em
    top 50%
    margin 0
    border 0px
    border-bottom 4px solid $accentColor !important

  .items-container
    position absolute
    width 100%
    top 50%
    margin-top 2.5em
    color lighten($textColor, 20%)
    .author, .date
      font-size 1.2em
      margin-bottom .75em
    .institute
      font-size 1em
      margin-top 1.5em
</style>
