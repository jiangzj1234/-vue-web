<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">全部分类</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of all" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">全部类型</div>
        <div class="button-list">
          <router-link tag="div" to='/juqing' class="button-wrapper"><div class="button">剧情</div></router-link>
          <router-link tag="div" to='/xiju' class="button-wrapper"><div class="button">喜剧</div></router-link>
          <router-link tag="div" to='/kehuan' class="button-wrapper"><div class="button">科幻</div></router-link>
          <router-link tag="div" to='/kehuan' class="button-wrapper" v-for="item of all2" :key="item.id">
            <div class="button">{{item.name}}</div>
          </router-link>
        </div>
      </div>
      <div class="area">
        <div class="title">全部地区</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of all3" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">全部年代</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of all4" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">全部特色</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of all5" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'ClassifyList',
  props: {
    all: Array,
    all2: Array,
    all3: Array,
    all4: Array,
    all5: Array
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {click: true})
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    overflow: hidden
    position: absolute
    top: 1rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .6rem
      width: 25%
      background: #696969
      padding-left: .69rem
      color: #F8F8FF
      font-size: .3rem
      border-radius: 1rem
    .button-list
      overflow: hidden
      padding: .1rem .1rem .1rem .1rem
      margin-bottom: .5rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .2rem
          padding: .2rem
          text-align: center
          border: .02rem solid #FF7F50
          background: #FF7F50
          border-radius: 1rem
          font-size: .3rem
          color: #F5F5F5
</style>
