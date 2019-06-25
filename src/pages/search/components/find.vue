<template>
  <div>
    <div class="find">
      <router-link to='/'>
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      <div class="search">
        <input type="text" class="search-input" placeholder="点击搜索" v-model='search'>
      </div>
      <div class="name"><span class="iconfont">&#xe632;</span></div>
    </div>
    <div class="findd">
      <router-link tag="div" :to="'/sdetail/'+item.objectId" class="finds" v-for='item in filterFind' :key='item.title' v-show="search">
        <img class="item-img" :src="item.cover"/>
        <p class="item-title">{{item.title}}</p>
        <p class="item-rate">评分:{{item.rate}}</p>
        <p class="item-content">{{item.content}}</p>
        <p class="item-about">{{item.about}}</p>
        <button class="item-button">查看详情</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBlog',
  data () {
    return {
      find: [],
      search: ''
    }
  },
  mounted () {
    const query = Bmob.Query('movie')
    query.find().then(res => {
      this.find = res
    })
  },
  computed: {
    filterFind () {
      return this.find.filter(data => {
        return data.title.match(this.search)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .find
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
    .search
      height: .86rem
      padding: 0 .1rem
      background: $bgColor
      float: left
      .search-input
        box-sizing: border-box
        width: 105%
        height: .58rem
        padding: 0.1rem
        margin-left: 1rem
        text-align: center
        border-radius: 1rem
        color: #666
    .name
      width: 1rem
      float: left
      margin-left: 1.25rem
  .findd
    margin-top: 1rem
    color: red
    .finds
      padding: 20px
      margin: 20px 0
      background-color: #eee
      height: 150px
      overflow: hidden
      color: black
      .item-img
        width: 1.8rem
        height: 2.6rem
        padding: .1rem
        padding-right: .2rem
        float: left
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
      .item-about
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
