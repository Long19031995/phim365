<template>
	<div id="index">
		<nuxt-child></nuxt-child>
	</div>
</template>

<script>
	export default {
		mounted () {
			if (this.$route.fullPath === '/') {
				window.location.href = '/trang-chu'
			}
		}
	}
</script>