<template>
  <div class="header-fixed">
    <router-link to='/classify'>
      <div class="iconfont header-fixed-back">&#xe624;</div>
    </router-link>
    <p>喜剧</p>
  </div>
</template>

<script>
export default {
  name: 'JuqingHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
