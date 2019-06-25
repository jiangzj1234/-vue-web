<template>
  <div class="item">
    <router-link tag="div" class="item1" v-for="(item,index) of list" :key="index" :to="'/yingpingdetail/' + item.objectId">
      <div class="item-about">
      <div class="item-filmname">
        <p class="item-filmname-p">{{item.title}}</p>
      </div>
      <div class="item-time">
        <p class="item-time-p">{{item.time}}</p>
      </div>
      <div class="item-content">
        <p class="item-content-p">{{item.text.substring(0,13)+'...'}}</p>
      </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'YList',
  props: {
    list: Array
  }}
</script>

<style lang="stylus" scoped>
.item
  margin-top: .8rem
  .item1
    margin-top: .35rem
    float: left
    background:#eee
    .item-about
      .item-filmname
        .item-filmname-p
          position: relative
          top: 0.1rem
          padding-left: .2rem
          font-size: .32rem
          width:7.2rem
          color: black
      .item-time
        position: relative
        top: .4rem
        left: 4.8rem
        width: 3.9rem
        font-size: .26rem
        color: #ff6600
      .item-content
        position: relative
        top: 0rem
        left: .2rem
        width: 8rem
        font-size: .3rem
        line-height: .49rem
        color: #A9A9A9
</style>
