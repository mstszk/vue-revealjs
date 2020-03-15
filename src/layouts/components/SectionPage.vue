<template lang="pug">
  .section-container
    slot
</template>

<style lang="stylus">
.section-container
  position relative
  height 100%
  width 100%
  text-align left

  h2
    position absolute
    left 0
    bottom 50%
    width calc(100% - 5em)
    margin-left 2.5em
    margin-right 2.5em
    padding-bottom .5em
    font-size 2em
    border-bottom 4px solid $accentColor
</style>
