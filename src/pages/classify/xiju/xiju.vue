<template>
  <div>
    <xiju-header></xiju-header>
    <xiju-list :list="list"></xiju-list>
  </div>
</template>

<script>
import XijuHeader from './components/Header'
import XijuList from './components/List'
export default {
  name: 'Xiju',
  components: {
    XijuHeader,
    XijuList
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    getHomeInfo () {
      const recommendList = Bmob.Query('xiju')
      recommendList.find().then(res => {
        this.list = res
      })
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  activated () {
    this.getHomeInfo()
  }
}
</script>

<style>
</style>
