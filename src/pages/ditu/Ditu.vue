<template>
  <div id="app">
    <ditu-header></ditu-header>
    <div id="allmap" ref="allmap"></div>
  </div>
</template>

<script>
import BMap from 'BMap'
import DituHeader from './components/DituHeader'
export default {
  name: 'App',
  components: {
    DituHeader
  },
  methods: {
    map () {
      let map =new BMap.Map(this.$refs.allmap) // 创建Map实例
      var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT}) // 左上角，添加比例尺
      var top_left_navigation = new BMap.NavigationControl() // 左上角，添加默认缩放平移控件
      var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL})
      map.centerAndZoom(new BMap.Point(113.587337, 23.068167), 13) // 初始化地图,设置中心点坐标和地图级别
      var local = new BMap.LocalSearch(map, {
        renderOptions:{map: map}
      })
      local.searchNearby('电影', new BMap.Point(113.587337, 23.068167), 1000)
      map.addControl(new BMap.MapTypeControl({ // 添加地图类型控件
        mapTypes: [
          BMAP_NORMAL_MAP,
          BMAP_HYBRID_MAP
        ]
      }))
      map.setCurrentCity('东莞') // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
      map.addControl(top_left_control)
      map.addControl(top_left_navigation)
      map.addControl(top_right_navigation)
    }
  },
  mounted () {
    this.map()
  }
}
</script>

<style lang="stylus" scoped>
#app {
  padding-top: .8rem
  text-align: center;
  color: #2c3e50;
}
#allmap{
  height:625px;
  overflow: hidden;
}
</style>
