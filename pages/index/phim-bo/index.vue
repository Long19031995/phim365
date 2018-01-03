<template>
	<div id="film-series">
		<div class="link-redirect">
			<a href="/trang-chu">
				Trang chủ
			</a>
			|
			<a href="/phim-moi">
				Phim mới
			</a>
			|
			<a href="/phim-le">
				Phim lẻ
			</a>
			|
			<a href="/phim-moi/ten-phim/page-1">
				Khám phá
			</a>
		</div>
		<div class="content">
			<div class="list-series">
				<h1 class="text-primary text-center">Phim bộ</h1>
				<div v-for="film in listSeries" class="series">
					<div class="alert alert-info" role="alert">
					  	<span class="title">
					  		<a :href="'/chi-tiet/' + film.slug" class="text-info">
					  			{{ film.title }}
					  		</a>
					  	</span>
					  	<br>
					  	<span class="time-ago text-primary">
					  		{{ film.time_crawl | getTimeAgo }}
					  	</span>
					  	-
					  	<span>
					  		{{ film.length }}	
					  	</span>
					  	-
					  	<span class="source text-danger">
					  		{{ film.source }}
					  	</span>
					</div>
				</div>
				<div class="load-more">
					<div @click="getMore()" class="btn btn-info">
						Xem thêm
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import store from '~/static/other/js/store.js'
	export default {
		async asyncData () {
			let listSeries = await store.getData('listFilmLatest', {
				id: 2,
				offset: 0,
				size: 10
			})

			return {
				listSeries: listSeries,
				id: 2,
				offset: 0,
				size: 10
			}
		},
		head () {
			return {
				title: 'Phim bộ',
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
						content: 'Phim bộ'
					},
					{
						property: 'og:description',
						content: 'Phim 365 là Website giúp bạn xem phim mới nhất, hay nhất, chất lượng cao HD, Việt Sub, thuyết mình, lồng tiếng, cập nhật nhanh nhất từ tất cả các nguồn. Thể loại đa dạng: Phim lẻ, Phim bộ, Phim hoạt hình, Phim hành động, Phim tâm lý, Phim chiến tranh, Phim võ thuật, Phim hài, Phim viễn tưởng, Phim kinh dị, Phim cổ trang, Phim tình cảm, Phim tài liệu...'
					}
				]
			}
		},
		filters: {
			getTimeAgo: function(timeUTC) {
				var self = this

				var timeCurrent = (new Date()).getTime()

				var secondAgo = Math.round((timeCurrent - timeUTC) / 1000)
				if (secondAgo < 60) {
					return secondAgo + ' giây trước'
				}

				var minuteAgo  = Math.round(secondAgo / 60)
				if (minuteAgo < 60) {
					return minuteAgo + ' phút trước'
				}

				var hourAgo = Math.round(minuteAgo / 60)
				if (hourAgo < 24) {
					return hourAgo + ' giờ trước'
				}

				var dayAgo = Math.round(hourAgo / 24)
				if (dayAgo < 30) {
					return dayAgo + ' ngày trước'
				}

				var monthAgo = Math.round(dayAgo / 30)
				if (monthAgo < 90) {
					return monthAgo + ' tháng trước'
				}

				var threeMonthAgo = Math.round(monthAgo / 90)
				if (threeMonthAgo < 4) {
					return threeMonthAgo + ' quý trước'
				}

				var yearAgo = Math.round(threeMonthAgo / 4)
				return yearAgo + ' năm trước'
			}
		},
		methods: {
			async getMore () {
				var self = this

				let listSeries = await store.getData('listFilmLatest', {
					id: self.id,
					offset: self.offset + 1,
					size: self.size
				})

				listSeries.forEach(function (series) {
					self.listSeries.push(series)
				})
			}
		}
	}
</script>

<style scoped>
	#film-series {
		margin: 0px;
		padding: 0px;
		width: 100%;
	}
	.link-redirect {
		position: fixed;
		width: 100%;
		height: 40px;
		background-color: #eee;
		text-align: right;
		padding: 0px 40px;
		line-height: 40px;
		vertical-align: middle;
		z-index: 3000;
	}
	.list-series {
		width: 100%;
		padding: 0px 20px;
		overflow-x: hidden;
		overflow-y: auto;
		float: left;
	}
	.series {
		width: 50%;
		padding: 10px 20px;
		float: left;
		box-sizing: border-box;
	}
	.load-more {
		text-align: center;
		margin-bottom: 20px;
	}
	.content {
		padding-top: 40px;
		width: 100%;
	}
	.title {
		text-transform: capitalize;
		font-weight: bold;
	}
	.time-ago, .source {
		font-size: 13px;
	}
	@media(max-width: 575px) {
		.list-series {
			width: 100%;
		}
		.list-series {
			width: 100%;
		}
		.series {
			width: 100%;
			padding: 10px 0px;
		}
	}
</style>