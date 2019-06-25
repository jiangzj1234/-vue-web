<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" />
          <p class="swiper-title"><b>{{item.title}}</b></p>
          <p class="swiper-desc">{{item.desc}}</p>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important;
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 34.28%
    background: #fff
    .swiper-img
      width: 50%
    .swiper-title
      position: relative
      top: -2rem
      left: 4rem
      width: 3.5rem
      font-size: .28rem
    .swiper-desc
      padding-top: .5rem
      position: relative
      top: -2.3rem
      left: 4rem
      width: 3.5rem
      font-size: .2rem
      line-height: .47rem
      color: #A9A9A9
    .swiper-pagination
      position: relative
      top: -2.3rem
</style>
