<template>
  <div>
    <kehuan-header></kehuan-header>
    <kehuan-list :list="list"></kehuan-list>
  </div>
</template>

<script>
import KehuanHeader from './components/Header'
import KehuanList from './components/List'
export default {
  name: 'Kehuan',
  components: {
    KehuanHeader,
    KehuanList
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    getHomeInfo () {
      const recommendList = Bmob.Query('kehuan')
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
