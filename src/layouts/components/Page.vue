<template lang="pug">
  .page-container(ref="page")
    slot
</template>

<script>
export default {
  mounted() {
    const head = this.$refs.page.firstChild
    this.$refs.page.removeChild(head)
    this.$refs.page.innerHTML = `<div class="header">${head.outerHTML}</div><div class="content">${this.$refs.page.innerHTML}</div>`
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
      top 50%
      transform translateY(-50%)
  .content
    grid-area content
    box-sizing border-box
    width 100%
    align-self center
    padding 0 2em
</style>
