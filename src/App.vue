<template>
  <div id="app">
    <keep-alive :exclude="['Detail', 'Kehuandetail', 'Xijudetail', 'Juqingdetail', 'Bloga', 'Search', 'Sdetail', 'Yingpingdetail']">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
