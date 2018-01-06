<template>
	<div id="film-new">
		<div class="link-redirect">
			<a href="/">
				Trang chủ
			</a>
			|
			<a href="/phim-moi/ten-phim/page-1">
				Khám phá
			</a>
		</div>
		<div class="content">
			<div class="list-movie">
				<h1 class="text-primary text-center">Phim lẻ</h1>
				<div v-for="film in listMovie" class="alert alert-success" role="alert">
				  	<span class="title">
				  		<a :href="'/chi-tiet/' + film.slug" class="text-success">
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
				<a href="/phim-le">
					<div class="button btn btn-success">
						Xem thêm
					</div>
				</a>
			</div>
			<div class="list-series">
				<h1 class="text-primary text-center">Phim bộ</h1>
				<div v-for="film in listSeries" class="alert alert-info" role="alert">
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
				<a href="/phim-bo">
					<div class="button btn btn-info">
						Xem thêm
					</div>
				</a>
			</div>
		</div>
		<div class="list-tag">
			<ul>
				<li :class="getStyleTag()" v-for="tag in listTag">
					<a :href="'/phim-moi/ten-phim/page-1?keySearch=' + tag.replace(/\s+/g, '-')">
						{{ tag }}
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import store from '~/static/other/js/store.js'
	export default {
		async asyncData () {
			let listMovie = await store.getData('listFilmLatest', {
				id: 1
			})

			let listSeries = await store.getData('listFilmLatest', {
				id: 2
			})

			let listTag = []
			var i = 0
			if (listMovie && listSeries) {
				listMovie.forEach(function (movie) {
					let arrayTag = movie.tags.split(',')
					arrayTag.forEach(function (tag) {
						if (i >= 10 || tag.length > 30 || tag.length < 5) {
							return
						}
						listTag.push(tag.replace(/;/g, ' ').replace(/\s+/g, ' ').trim())
						i++
					})
				})
				listSeries.forEach(function (series) {
					let arrayTag = series.tags.split(',')
					arrayTag.forEach(function (tag) {
						if (i >= 10 || tag.length > 30 || tag.length < 5) {
							return
						}
						listTag.push(tag.replace(/;/g, ' ').replace(/\s+/g, ' ').trim())
						i++
					})
				})
			}

			return {
				listMovie: listMovie,
				listSeries: listSeries,
				listTag: listTag
			}
		},
		head () {
			return {
				title: 'Phim mới',
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
						content: 'Phim mới'
					},
					{
						property: 'og:description',
						content: 'Phim 365 là Website giúp bạn xem phim mới nhất, hay nhất, chất lượng cao HD, Việt Sub, thuyết mình, lồng tiếng, cập nhật nhanh nhất từ tất cả các nguồn. Thể loại đa dạng: Phim lẻ, Phim bộ, Phim hoạt hình, Phim hành động, Phim tâm lý, Phim chiến tranh, Phim võ thuật, Phim hài, Phim viễn tưởng, Phim kinh dị, Phim cổ trang, Phim tình cảm, Phim tài liệu...'
					}
				]
			}
		},
		data () {
			return {
				listStyle: [
					'alert alert-info',
					'alert alert-success',
					'alert alert-warning',
					'alert alert-danger'
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
			getStyleTag () {
				let min = 0
				let max = this.listStyle.length - 1
				let random = Math.floor(Math.random() * (max - min + 1)) + min

				return this.listStyle[random]
			}
		}
	}
</script>

<style scoped>
	#film-new {
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
	.list-movie {
		width: 50%;
		padding: 0px 20px;
		overflow-x: hidden;
		overflow-y: auto;
		float: left;
	}
	.list-series {
		width: 50%;
		padding: 0px 20px;
		overflow-x: hidden;
		overflow-y: auto;
		float: left;
		margin-bottom: 40px;
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
	.list-tag {
		clear: both;
		width: 100%;
	}
	.list-tag ul {
		list-style: none;
		margin-bottom: 40px;
	}
	.list-tag ul li {
		float: left;
		margin: 5px;
		border-radius: 10px !important;
		padding: 5px 10px !important;
	}
	@media(max-width: 575px) {
		.list-movie {
			width: 100%;
		}
		.list-series {
			width: 100%;
		}
	}
</style>