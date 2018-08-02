// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* main.js是程序的入口文件 */
// 要引入App.vue  方法：import App from './App',将后缀.vue省略掉了，自动去找vue文件，找不到会找js再找json文件
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */

// 创建vue实例，绑定到index.html的"#app"  el :"#app"
new Vue({
  el: '#app',
  // 实际上为router:router
  router,
  // 祖册子组件App,{App}是es6的写法，实际上是App:App.
	// 模板的写法是<App/>
  components: { App },
  template: '<App/>'
})
