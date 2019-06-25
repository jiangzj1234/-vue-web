<template>
  <div>
    <PaihanbangHeader></PaihanbangHeader>
    <PaihanbangMovies :list="molist"></PaihanbangMovies>
  </div>
</template>

<script>
import PaihanbangHeader from './components/Header'
import PaihanbangMovies from './components/Movies'
export default {
  name: 'Paihanbang',
  components: {
    PaihanbangHeader,
    PaihanbangMovies
  },
  data () {
    return {
      molist:[]
    }
  },
  methods: {
    getPaihanbangInfo () {
      const molist = Bmob.Query('ranking')
      molist.find().then(res => {
        this.molist = res
      })
  }},
  mounted () {
    this.getPaihanbangInfo()
      }}
</script>

<style>
</style>
