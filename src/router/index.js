import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import City from '@/components/city'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
    	path : '/city',
    	name : 'City',
    	component : City
    }
  ]
})
