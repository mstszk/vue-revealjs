<template lang="pug">
  .section-container
    .contents
      slot
</template>

<style lang="stylus">
.section-container
  position relative
  height 100%
  width 100%
  text-align left

  .contents
    margin auto
    position absolute
    left 0
    top calc(50% - 2em)
    width calc(100% - 5em)
    margin-left 2.5em
    margin-right 2.5em

    h2
      padding-bottom .5em
      font-size 2em
      border-bottom 4px solid $accentColor
      margin-bottom .2em
    > *:not(h2)
      text-align right
      font-size .8em
      color lighten($textColor, 15%)
</style>
