<template>
  <div>
    <div class="header">
      <div class="header-left">
        <!-- <div class="iconfont back-icon">&#xe624;</div> -->
         首页
      </div>
      <router-link to='/search'>
        <div class="header-input">
          <span class="iconfont">&#xe632;</span>
          点击搜索
        </div>
      </router-link>
      <router-link to='/ditu'>
        <div class="header-right">
          附近影院
          <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
      </router-link>
    </div>
    <div class="header-bottom">
      <div class="header-bottom-in">
        <router-link to='/classify'>
          <div class="fenlei">分类</div>
        </router-link>
        <router-link to='/yingping'>
          <div class="yingping">影评</div>
        </router-link>
        <router-link to='/paihanbang'>
          <div class="paihangbang">排行榜</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      padding-left: .2rem
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      width: 4.55rem
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: 1rem
      color: #ccc
    .header-right
      min-width: 1.04rem
      padding-left: .2rem
      padding-right: .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
  .header-bottom
    height: .6rem
    background: $bgColor
    color: #fff
    .header-bottom-in
      line-height .5rem
      .fenlei
        width: .85rem
        padding-left: .3rem
        margin-left: 1.3rem
        float: left
        color: #fff
        border: .01rem solid #FF7F50
        background: #FF7F50
        border-radius: 1rem
      .yingping
        width: .85rem
        padding-left: .3rem
        float: left
        margin-left: .65rem
        border: .01rem solid #FF7F50
        background: #FF7F50
        border-radius: 1rem
        color: #fff
      .paihangbang
        padding-left: .3rem
        width: 1.15rem
        margin-left: 4.8rem
        border: .01rem solid #FF7F50
        background: #FF7F50
        border-radius: 1rem
        color: #fff
</style>
