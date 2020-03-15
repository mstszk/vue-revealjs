<template lang="pug">
  .slides-container
    RevealJS(:print="print")
    iframe.printer-window(v-if="!print")
    .buttons
      a.button(href="/")
        | HOME
      .button(@click="printSlides")
        | PRINT
</template>

<script>
import RevealJS from './components/RevealJS.vue'

export default {
  components: { RevealJS },
  computed: {
    print() {
      return 'print-pdf' in this.$route.query
    },
  },
  methods: {
    toggleAspect() {
      this.aspect = this.aspect === '4:3' ? '16:10' : this.aspect === '16:10' ? '16:9' : '4:3'
    },
    printSlides() {
      document.querySelector('.printer-window').src = `${window.origin}${window.location.pathname}?print-pdf`
    },
  },
  mounted() {
    if (!this.print) {
      const el = document.querySelector('.printer-window')
      el.onload = () => {
        el.contentWindow.print()
      }
    }
  }
}
</script>

<style lang="stylus">
.slides-container
  .printer-window
    visibility hidden
    height 0
    width 0
  .slides-body
    @import '../styles/slide.styl'
  .buttons
    position fixed
    top 0
    left 0
    z-index 5
    font-weight 500
    user-select none
    .button
      display inline-block
      margin 0 .5rem
      cursor pointer
      color $accentColor
      border 2px solid $accentColor
    a
      text-decoration none
@media print
  .slides-container
    .buttons
      display none
</style>
