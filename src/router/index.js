import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Service from '@/pages/Service'
import OnlineService from '@/pages/OnlineService'
import Product from '@/pages/Product'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/service/:key',
      name: 'service',
      component: Service
    },
    {
      path: '/online-service',
      name: 'onlineServiceHome',
      component: OnlineService
    },
    {
      path: '/online-service/:key',
      name: 'onlineService',
      component: OnlineService
    },
    {
      path: '/online-service/:serviceKey/product/:productCode',
      name: 'product',
      component: Product
    }
  ]
})
