<!--该组件是一个局部组件，因为要在main.js中要注册该子组件-->
<template>
  <div id="app">
  <!--router-view为当前路由下显示的内容，App.vue在main.js中引入，
    当前的路由指的是同样在main.js中引入的router/index.js中的router路由，
    根路径下显示的是HelloWorld.vue,所以显示的是HelloWord.vue中的内容-->
    <router-view/>
   </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>

