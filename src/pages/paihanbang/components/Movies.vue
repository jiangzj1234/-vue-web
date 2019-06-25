<template>
  <div class="items">
    <ul v-for="(item,index) of list" :key="index">
      <li class="item border-bottom" >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.href"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">评论人数：{{item.num}}</p>
          <p class="item-rate">评分：{{item.score}}</p>
          <p class="item-top">{{index+1}}</p>
          <button class="item-buttom">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PaihanbangMovies',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped="">
  @import '~styles/mixins.styl'
  .items
    margin-top: .85rem
    .item-img-wrapper
      overflow: hidden
      height: 0
      padding-bottom: 28%
      background:#eee
      .item-img
        width: 45%
    .item-info
      padding: .04rem
      .item-title
        line-height: .46rem
        font-size: .32rem
        color: #27408B
        ellipsis()
        position: absolute
        top: .2rem
        left: 3.5rem
        width: 3.5rem
      .item-desc
        line-height: .4rem
        font-size: .24rem
        ellipsis()
        position: absolute
        top: .8rem
        left: 3.5rem
        width: 3.5rem
      .item-rate
        line-height: .4rem
        font-size: .24rem
        ellipsis()
        position: absolute
        top: 1.2rem
        left: 3.5rem
        width: 3.5rem
      .item-top
        line-height: .42rem
        font-size: .56rem
        ellipsis()
        position: absolute
        top: .75rem
        left: 6.6rem
        width: 3.5rem
        color:red
      .item-buttom
        position: absolute
        top: 1.40rem
        left: 5.8rem
        line-height:.36rem
        margin-top:.16rem
        background:#ff9300
        padding:0 .2rem
        border-radius:.06rem
        color:#fff
</style>
