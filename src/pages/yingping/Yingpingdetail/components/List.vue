<template>
  <div class="item1">
    <div class="item">
      <div class="item-filmname">
        <p class="item-filmname-p">{{item.title}}</p>
      </div>
      <div class="item-rate">
        <p class="item-rate-p">时间:{{item.time}}</p>
      </div>
      <div class="item-people">
        <p class="item-people-p">作者:{{item.user}}</p>
      </div>
      <div class="item-content">
        <p class="item-content-p">电影:{{item.movie}}</p>
      </div>
      <div class="item-about">
        <p class="item-about-p" >{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  data () {
    return {
      id: this.$route.params,
      item: {}
    }
  },
  created () {
    const query = Bmob.Query('yingping')
    query.get(this.id.objectId).then(res => {
      this.item = res
    })
  }
}
</script>

<style lang="stylus" scoped>
.item1
  height:120%
  background:#FFEC8B
  .item
    padding-top: 1.2rem
    float: left
    width:100%
    .item-filmname
      overflow: hidden
      position: relative
      text-align: center
      font-size: .44rem
    .item-rate
      overflow: hidden
      position: relative
      left:4rem
      top:1rem
      font-size: .28rem
    .item-people
      overflow: hidden
      position: relative
      left:4rem
      top:.4rem
      link-height:center
      font-size: .28rem
      
    .item-content
      overflow: hidden
      position: relative
      left:.8rem
      top:.15rem
      link-height:center
      font-size: .28rem
    .item-about
      overflow: hidden
      position: relative
      left:0.5rem
      top:1.2rem
      link-height:center
      font-size: .32rem
      width:6.5rem
      text-indent :.6rem
      letter-spacing:.04rem
      height:100%
</style>
