<template>
  <div>
    <YHeader></YHeader>
    <YList :list="Ylist"></YList>
  </div>
</template>

<script>
import YHeader from './components/Header'
import YList from './components/List'
export default {
  name: 'Home',
  components: {
    YHeader,
    YList
  },
  data () {
    return {
      Ylist: []
    }
  },
  methods: {
    getHomeInfo () {
      const query = Bmob.Query('yingping')
      query.find().then(res => {
        this.Ylist = res
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
