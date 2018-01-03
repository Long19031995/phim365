<template>
	<nav class="nav-bar">
		<a href="/trang-chu">
			<button class="btn-back btn btn-danger">
				<i class="fa fa-home"></i>
			</button>
		</a>
		<search ref="search"></search>
		<a href="/phim-moi">
			<button class="btn-new btn btn-primary">
				<i class="fa fa-bars"></i>
			</button>
		</a>
	</nav>
</template>

<script>
	import search from '~/components/search.vue'
	export default {
		components: { search }
	}
</script>
<style scoped>
	.nav-bar {
		padding: 10px 0px;
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		z-index: 10;
		background-color: black;
	}
	.btn-back, .btn-new {
		width: auto;
		height: 38px;
		width: 38px;
		padding: 10px;
		position: fixed;
		top: 10px;
	}
	.btn-back {
		left: 10px;
	}
	.btn-new {
		right: 10px;
	}
</style>