<template>
  <div class="list" ref="wrapper">
    <div>
      <home-swiper :list="swiperList"></home-swiper>
      <home-list :list="list"></home-list>
      <home-movies></home-movies>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import HomeSwiper from './list/Swiper'
import HomeList from './list/Homelist'
import HomeMovies from './list/movies'
export default {
  name: 'Home',
  components: {
    HomeSwiper,
    HomeList,
    HomeMovies
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      list: []
    }
  },
  methods: {
    getHomeInfo () {
      const query = Bmob.Query('movie')
      query.find().then(res => {
        this.list = res
      })
      const swiperList = Bmob.Query('swiperList')
      swiperList.find().then(res => {
        this.swiperList = res
      })
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {click: true})
    this.getHomeInfo()
  },
  activated () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .list
    overflow: hidden
    position: absolute
    top: 1.46rem
    left: 0
    right: 0
    bottom: 0
</style>
