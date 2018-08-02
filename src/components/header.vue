<template>
	<div class="header">
		<div class="back iconfont">&#xe600;</div>		
		<div class="search">
			<span class="iconfont search-icon">&#xe632;</span>
			请输入搜索内容
		</div>
		<div class="city">
			北京
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'index-header'
	}
</script>

<style lang="stylus" scoped>
	@import "../assets/stylus/varibles.styl";
	.header
		display: flex
		height: 0.88rem
		line-height : 0.88rem
		background: $bgColor
		color: #fff
		.back
			width: .58rem
			text-align: center
			font-size: .4rem
			font-weight: bold 

		.search
		/*弹性盒flex:1*/
			flex: 1
			height: .6rem
			line-height: .6rem
			margin: .14rem .2rem
			padding-left: .4rem
			background: #fff
			border-radius: .1rem
			color: #ccc
			/*让图标稍微向下一点*/
			.search-icon
				position: relative
				top: .02rem
				padding-right: .04rem
		.city
			padding-right: .6rem
			position: relative
			&:before
				position: absolute
				top: .34rem
				right: .2rem
				/*\0020代表空内容*/
				content: "\0020"
				width: 0
				height: 0
				border-left: .14rem solid transparent
				border-right: .14rem solid transparent
				border-top: .14rem solid #fff
</style>