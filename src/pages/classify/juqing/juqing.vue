<template>
  <div>
    <juqing-header></juqing-header>
    <juqing-list :list="list"></juqing-list>
  </div>
</template>

<script>
import JuqingHeader from './components/Header'
import JuqingList from './components/List'
export default {
  name: 'Juqing',
  components: {
    JuqingHeader,
    JuqingList
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    getHomeInfo () {
      const recommendList = Bmob.Query('juqing')
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
