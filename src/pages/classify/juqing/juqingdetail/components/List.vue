<template>
  <div>
    <div class="item">
      <div class="item-filmname">
        <p class="item-filmname-p">{{item.title}}</p>
      </div>
      <div class="item-cover">
        <img class="item-cover-img" :src="item.cover" />
      </div>
      <div class="item-rate">
        <p class="item-rate-p">评分{{item.rate}}</p>
      </div>
      <div class="item-people">
        <p class="item-people-p">{{item.people}}</p>
      </div>
      <div class="item-content">
        <p class="item-content-p">{{item.content}}</p>
      </div>
      <div class="item-a">
        <p class="item-a-p">{{item.title}}的剧情简介:</p>
      </div>
      <div class="item-about">
        <p class="item-about-p">{{item.about}}</p>
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
    const query = Bmob.Query('juqing')
    query.get(this.id.objectId).then(res => {
      this.item = res
    })
  }
}
</script>

<style lang="stylus" scoped>
  .item
    padding-top: .4rem
    float: left
    .item-filmname
      .item-filmname-p
        padding-left: .2rem
        font-size: .5rem
        color: black
    .item-cover
      width: 65%
      height: 5.5rem
      .item-cover-img
        width: 90%
        padding-top: .25rem
        padding-left: .17rem
    .item-rate
      width: 50%
      position: relative
      top: -4.93rem
      left: 3.7rem
      font-size: .3rem
      color: #ff6600
    .item-people
      width: 50%
      position: relative
      top: -5.22rem
      left: 5.3rem
      width: 3.9rem
      font-size: .3rem
      color: #ff6600
    .item-content
      position: relative
      top: -4.7rem
      left: 3.7rem
      width: 3.7rem
      font-size: .3rem
      line-height: .49rem
      color: #A9A9A9
    .item-a
      position: absolute
      top: 10.5rem
      padding-left:.3rem
    .item-about
      width: 6.5rem
      position: absolute
      top: 10.7rem
      line-height: .47rem
      padding-left: .53rem
      padding-top: .3rem
      color: #696969
</style>
