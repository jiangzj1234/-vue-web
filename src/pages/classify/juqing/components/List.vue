<template>
  <div>
    <div class="title">近期热门</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/juqingdetail/' + item.objectId"
      >
        <img class="item-img" :src="item.cover" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-rate">评分:{{item.rate}}</p>
          <p class="item-content">{{item.content}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'JuqingList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .9rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 2.8rem
    .item-img
      width: 1.8rem
      height: 2.6rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        margin-top: .2rem
        ellipsis()
      .item-rate
        line-height: .4rem
        color: #ff9300
        margin-top: .2rem
      .item-content
        font-size: .29rem
        margin-top: .3rem
        ellipsis()
      .item-button
        float: right
        line-height: .44rem
        margin-top: .25rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
