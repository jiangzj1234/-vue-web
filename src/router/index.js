import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Ditu from '@/pages/ditu/Ditu'
import Classify from '@/pages/classify/Classify'
import Kehuan from '@/pages/classify/kehuan/Kehuan'
import Kehuandetail from '@/pages/classify/kehuan/kehuandetail/Kehuandetail'
import Xiju from '@/pages/classify/xiju/Xiju'
import Xijudetail from '@/pages/classify/xiju/xijudetail/Xijudetail'
import Juqing from '@/pages/classify/juqing/Juqing'
import Juqingdetail from '@/pages/classify/juqing/juqingdetail/Juqingdetail'
import Search from '@/pages/search/Search'
import Sdetail from '@/pages/search/sdetail/Sdetail'
import Paihanbang from '@/pages/paihanbang/Paihanbang'
import Yingping from '@/pages/yingping/Yingping'
import Yingpingdetail from '@/pages/yingping/Yingpingdetail/Yingpingdetail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:objectId',
    name: 'Detail',
    component: Detail
  }, {
    path: '/ditu',
    name: 'Ditu',
    component: Ditu
  }, {
    path: '/classify',
    name: 'Classify',
    component: Classify
  }, {
    path: '/kehuan',
    name: 'Kehuan',
    component: Kehuan
  }, {
    path: '/kehuandetail/:objectId',
    name: 'Kehuandetail',
    component: Kehuandetail
  }, {
    path: '/xiju',
    name: 'Xiju',
    component: Xiju
  }, {
    path: '/xijudetail/:objectId',
    name: 'Xijudetail',
    component: Xijudetail
  }, {
    path: '/juqing',
    name: 'Juqing',
    component: Juqing
  }, {
    path: '/juqingdetail/:objectId',
    name: 'Juqingdetail',
    component: Juqingdetail
  }, {
    path: '/search',
    name: 'Search',
    component: Search
  }, {
    path: '/sdetail/:objectId',
    name: 'Sdetail',
    component: Sdetail
  }, {
    path: '/paihanbang',
    name: 'Paihanbang',
    component: Paihanbang
  }, {
    path: '/yingping',
    name: 'Yingping',
    component: Yingping
  }, {
    path: '/yingpingdetail/:objectId',
    name: 'Yingpingdetail',
    component: Yingpingdetail
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
