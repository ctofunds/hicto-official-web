import Vue from 'vue'
import Router from 'vue-router'
import Service from '@/pages/Service'
import Product from '@/pages/Product'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'serviceHome',
      component: Service
    },
    {
      path: '/service/:key',
      name: 'service',
      component: Service
    },
    {
      path: '/service/:serviceKey/product/:productCode',
      name: 'product',
      component: Product
    }
  ]
})
