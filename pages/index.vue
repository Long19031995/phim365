<template>
	<div id="home-component" class="d-flex flex-column justify-content-center">
		<div class="link-redirect">
			<a href="/phim-moi">
				Phim mới
			</a>
			|
			<a href="/phim-moi/ten-phim/page-1">
				Khám phá
			</a>
		</div>
		<div class="logo d-flex justify-content-center">
			<div class="p-text">
				P
			</div>
			<div class="h-text">
				h
			</div>
			<div class="i-text">
				i
			</div>
			<div class="m-text">
				m
			</div>
			<div class="n3-text">
				3
			</div>
			<div class="n6-text">
				6
			</div>
			<div class="n5-text">
				5
			</div>
		</div>
        <search></search>
        <a href="https://beta.phim365.net" class="link-beta">
        	Xem bản beta tại đây
        </a>
	</div>
</template>

<script>
	import search from '~/components/search.vue'
	export default {
		components: { search },
		head () {
			return {
				title: 'PHIM 365 | PHIM MỚI NHẤT | PHIM NHANH NHẤT',
				meta: [
					{ 
						name: 'description',
						content: 'Phim 365 là Website giúp bạn xem phim mới nhất, hay nhất, chất lượng cao HD, Việt Sub, thuyết mình, lồng tiếng, cập nhật nhanh nhất từ tất cả các nguồn. Thể loại đa dạng: Phim lẻ, Phim bộ, Phim hoạt hình, Phim hành động, Phim tâm lý, Phim chiến tranh, Phim võ thuật, Phim hài, Phim viễn tưởng, Phim kinh dị, Phim cổ trang, Phim tình cảm, Phim tài liệu...' 
					},
					{ 
						name: 'keywords',
						content: 'Phim 365, Link phim, Phim, xem phim, xem phim online, phim online, xem phim hd, phim vietsub, phim thuyet minh, phim nhanh, phim moi' 
					},
					{
						property: 'og:title',
						content: 'PHIM 365 | PHIM MỚI NHẤT | PHIM NHANH NHẤT'
					},
					{
						property: 'og:description',
						content: 'Phim 365 là Website giúp bạn xem phim mới nhất, hay nhất, chất lượng cao HD, Việt Sub, thuyết mình, lồng tiếng, cập nhật nhanh nhất từ tất cả các nguồn. Thể loại đa dạng: Phim lẻ, Phim bộ, Phim hoạt hình, Phim hành động, Phim tâm lý, Phim chiến tranh, Phim võ thuật, Phim hài, Phim viễn tưởng, Phim kinh dị, Phim cổ trang, Phim tình cảm, Phim tài liệu...'
					}
				]
			}
		}
	}
</script>

<style scoped>
	@font-face {
		font-family: timeburnerbold;
		src: url('/font/timeburnerbold.ttf');
	}
	#home-component {
		width: 100vw;
		height: 100vh;
	}
	.logo {
		width: 100%;
		height: auto;
		font-size: 100px;
		font-family: timeburnerbold;
		margin-top: -150px;
		margin-bottom: -30px;
	}
	.p-text {
		color: #34A853;
	}
	.h-text {
		color: #EA4335;
	}
	.i-text {
		color: #4285F4;
	}
	.m-text {
		color: #FBBC05;
	}
	.n3-text {
		color: #34A853;
	}
	.n6-text {
		color: #EA4335;
	}
	.n5-text {
		color: #4285F4;
	}
	.link-redirect {
		position: fixed;
		top: 10px;
		right: 10px;
	}
	.link-beta {
		position: fixed;
		bottom: 10px;
		right: 10px;
	}
	@media (max-width: 767px) {
		.logo {
			font-size: 50px;
			margin-bottom: 0px;
		}
	}
</style>