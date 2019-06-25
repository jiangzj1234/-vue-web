<template>
  <div>
    <classify-header></classify-header>
    <classift-list :all="all" :all2="all2" :all3="all3" :all4="all4" :all5="all5"></classift-list>
  </div>
</template>

<script>
import axios from 'axios'
import ClassifyHeader from './components/Header'
import ClassiftList from './components/List'
export default {
  name: 'Classify',
  components: {
    ClassifyHeader,
    ClassiftList
  },
  data () {
    return {
      all: [],
      all2: [],
      all3: [],
      all4: [],
      all5: []
    }
  },
  methods: {
    getInfo () {
      axios.get('/api/classify.json')
        .then(this.handleGetInfoSucc)
    },
    handleGetInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.all = data.all
        this.all2 = data.all2
        this.all3 = data.all3
        this.all4 = data.all4
        this.all5 = data.all5
      }
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
