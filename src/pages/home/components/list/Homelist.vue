<template>
  <div>
    <div class="title">热映</div>
    <div class="itemz">
      <router-link tag="div" class="item border-bottom" v-for="item of list" :key="item.title" :to="'/detail/' + item.objectId">
          <img class="item-img" :src="item.cover"/>
          <p class="item-title">{{item.title}}</p>
          <p class="item-rate">评分:{{item.rate}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped="">
  @import '~styles/mixins.styl'
  .title
    margin-top: .1rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .itemz
    height: 0
    padding-bottom: 350%
    padding-left: .4rem
    padding-top: .2rem
    .item
      overflow: hidden
      height: 3.7rem
      float: left
      width: 33.3%
      .item-img
        width: 1.8rem
        height: 2.6rem
        padding: .1rem
      .item-title
        line-height: .54rem
        font-size: .26rem
        padding-left: .05rem
        ellipsis()
      .item-rate
        line-height: .4rem
        font-size: .15rem
        padding-left: .1rem
        color: #ff6600
        ellipsis()
</style>
