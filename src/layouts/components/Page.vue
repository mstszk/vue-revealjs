<template lang="pug">
  .page-container(ref="page")
    slot
</template>

<script>
export default {
  data() {
    return {
      page: 0,
      pageNum: 0
    }
  },
  mounted() {
    const self = this.$refs.page
    const head = self.firstChild
    const section = self.parentNode
    const sections = [].slice.call(section.parentNode.children)
    const page = sections.indexOf(section) + 1
    const pageNum = sections.length
    self.removeChild(head)
    self.innerHTML = `<div class="header">${head.outerHTML}</div><div class="content">${self.innerHTML}</div><div class="page-num">${page}/${pageNum}</div>`
  }
}
</script>

<style lang="stylus">
.page-container
  display grid
  height 100%
  width 100%
  text-align left
  grid-template "header" 2.4em "content" 1fr

  .header
    grid-area header
    position relative
    box-sizing border-box
    width 100%
    height 100%
    padding 0 .5em
    background $textColor
    color $backgroundColor
    font-size 1.4em
    h3
      position absolute
      font-weight 500
      top 50%
      transform translateY(-50%)

  .content
    grid-area content
    box-sizing border-box
    width 100%
    align-self center
    padding 0 2em
    max-height 100%
    overflow-y auto

  .page-num
    position absolute
    bottom .5rem
    right .5rem
    font-size .8em
    opacity 0.5
</style>
