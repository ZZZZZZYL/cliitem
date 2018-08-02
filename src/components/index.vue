<!-- eslint-disable -->
<template>
	<div class="header">header</div>
</template>

<script>
export default {
	name: 'index'
}
</script>
<!--加上scoped限制样式起作用的范围，只有对这个组件起作用，在别的组件中有类名为header的dom不会对其起作用-->
<style scoped>
	.header{
		background: red;
	}
</style>