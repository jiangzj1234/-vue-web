<template>
  <div>
    <detail-header></detail-header>
    <div class="content">
      <detail-list></detail-list>
    </div>
  </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Yingpingdetail',
  components: {
    DetailHeader,
    DetailList
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 20rem
</style>
