import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import City from '@/components/City'
import Index from '@/components/Index'
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
