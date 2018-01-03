<template>
	<div id="category-component">
		<navbar></navbar>
		<section class="list-category">
			<div class="category" v-for="category in category.listCategory">
				<a :href="'/' + category.slug + '/ten-phim/page-1'">
					Phim {{ category.name }}
				</a>
			</div>
		</section>
		<section v-if="listFilm.length > 0" class="content container">
			<div class="filter">
				<div class="row">
					<div class="col-sm">
						<label>Nhóm</label>
						<select class="form-control" v-model="group.cbxGroup">
							<option v-for="group in group.listGroup" :value="group.value">
								{{ group.display }}
							</option>
						</select>
					</div>
					<div class="col-sm">
						<label>Nguồn</label>
						<select class="form-control" v-model="source.cbxSource">
							<option value="">Tất cả</option>
							<option v-for="source in source.listSource" :value="source.source.split('.')[0]">
								{{ source.source }}
							</option>
						</select>
					</div>
					<div class="col-sm">
						<label>Năm</label>
						<select class="form-control" v-model="year.cbxYear">
							<option value="">Tất cả</option>
							<option v-for="year in year.listYear" :value="year.value">
								{{ year.display }}
							</option>
						</select>
					</div>
					<div class="col-sm">
						<label for="">Lọc</label>
						<button @click="filter()" class="btn btn-success form-control">
							<i class="fa fa-filter"></i>
							Lọc
						</button>
					</div>
				</div>
			</div>
			<br>
			<h3 v-if="keySearch !== undefined" class="title-search-result text-info">
				Kết quả tìm kiếm cho: {{ keySearch.replace(/\-/g, ' ') }}
			</h3>
			<a v-if="$route.params.page !== 'page-1'" :href="urlPrev">
				<button class="btn-prev btn btn-info">
					<i class="fa fa-chevron-left"></i>
				</button>
			</a>
			<a v-if="listFilm.length === 20" :href="urlNext">
				<button class="btn-next btn btn-info">
					<i class="fa fa-chevron-right"></i>
				</button>
			</a>
			<div class="list-film">
				<filmCard v-for="film in listFilm" :film="film"></filmCard>
			</div>
		</section>
		<section v-else class="content">
			<div class="title-content text-center">
				Không tìm thấy
			</div>
		</section>
		<foo></foo>
	</div>
</template>

<script>
	import store from '~/static/other/js/store.js'
	import filmCard from '~/components/filmCard.vue'
	import navbar from '~/components/navbar.vue'
	import foo from '~/components/foo.vue'
	export default {
		components: { filmCard, navbar, foo },
		async asyncData (context) {
			// get list category
			let listCategory = await store.getData('listCategory')

			// get list source
			let listSource = await store.getData('listSource')

			// get list year
			let listYear = [
				{
					display: '2017',
					value: '2017'
				},
				{
					display: '2016',
					value: '2016'
				},
				{
					display: '2015',
					value: '2015'
				},
				{
					display: '2014',
					value: '2014'
				},
				{
					display: '2013',
					value: '2013'
				},
				{
					display: '2012',
					value: '2012'
				},
				{
					display: '2011',
					value: '2011'
				},
				{
					display: '2010',
					value: '2010'
				}
			]

			// get list group
			let listGroup = [
				{
					display: 'Tên phim',
					value: 'title'
				},
				{
					display: 'Đạo diễn',
					value: 'director'
				},
				{
					display: 'Diễn viên',
					value: 'actors'
				}
			]

			let listFilm = await store.getData('searchFilm', {
				id: store.getValue(context.params.category, listCategory),
				type: store.getValue(context.params.group),
				offset: store.getValue(context.params.page),
				size: 20,
				text: store.getValue(context.query.keySearch),
				source: store.getValue(context.query.source),
				year: store.getValue(context.query.year)
			})

			let urlPrev = await store.getUrlSlide(context, 'prev')
			let urlNext = await store.getUrlSlide(context, 'next')

			let seo = {}

			let title = ''
			listCategory.forEach(function (category) {
				title += 'Phim ' + category.name + ' | '
			})
			title.slice(0, title.length - 2)
			seo['title'] = title

			let listImage = []
			for (var i = 0; i < 5; i++) {
				listImage.push(store.getThumbnailRoot(listFilm[i]))
			}
			seo['listImage'] = listImage

			return {
				category: {
					listCategory: listCategory,
					cbxCategory: context.params.category
				},
				group: {
					listGroup: listGroup,
					cbxGroup: store.getValue(context.params.group)
				},
				source: {
					listSource: listSource,
					cbxSource: store.getValue(context.query.source)
				},
				year: {
					listYear: listYear,
					cbxYear: store.getValue(context.query.year)
				},
				listFilm: listFilm,
				urlPrev: urlPrev,
				urlNext: urlNext,
				keySearch: context.query.keySearch,
				seo: seo
			}
		},
		head () {
			return {
				title: this.seo.title,
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
						content: this.seo.title
					},
					{
						property: 'og:description',
						content: 'Phim 365 là Website giúp bạn xem phim mới nhất, hay nhất, chất lượng cao HD, Việt Sub, thuyết mình, lồng tiếng, cập nhật nhanh nhất từ tất cả các nguồn. Thể loại đa dạng: Phim lẻ, Phim bộ, Phim hoạt hình, Phim hành động, Phim tâm lý, Phim chiến tranh, Phim võ thuật, Phim hài, Phim viễn tưởng, Phim kinh dị, Phim cổ trang, Phim tình cảm, Phim tài liệu...'
					},
					{ property: 'og:image', content: this.seo.listImage[0] },
					{ property: 'og:image', content: this.seo.listImage[1] },
					{ property: 'og:image', content: this.seo.listImage[2] },
					{ property: 'og:image', content: this.seo.listImage[3] },
					{ property: 'og:image', content: this.seo.listImage[4] }
				]
			}
		},
		computed: {
			searchResult () {
				let arrResult = []
				if (this.keySearch !== '' && this.keySearch !== undefined) {
					arrResult.push(this.keySearch)
				}
				if (this.category.cbxCategory !== '' && this.category.cbxCategory !== undefined) {
					for (var i = 0; i < this.category.listCategory.length; i++) {
						if (this.category.cbxCategory === this.category.listCategory[i].slug) {
							arrResult.push('Phim ' + this.category.listCategory[i].name)
							break
						}
					}
				}
				if (this.source.cbxSource !== '' && this.source.cbxSource !== undefined) {
					arrResult.push(this.source.cbxSource)
				}
				if (this.year.cbxYear !== '' && this.year.cbxYear !== undefined) {
					arrResult.push(this.year.cbxYear)
				}

				let result = ''
				for (var i = 0; i < arrResult.length; i++) {
					if (i === 0) {
						result += arrResult[i]
					} else {
						result += '/' + arrResult[i]
					}
				}

				return result
			}
		},
		methods: {
			filter () {
				var self = this
				let url = '/' + self.category.cbxCategory + '/' + store.getValue(self.group.cbxGroup) + '/page-1?'

				if (self.keySearch !== undefined) {
					url += 'keySearch=' + self.keySearch + '&'
				}
				if (self.source.cbxSource !== '') {
					url += 'source=' + store.getValue(self.source.cbxSource) + '&'
				}
				if (self.year.cbxYear !== '') {
					url += 'year=' + store.getValue(self.year.cbxYear) + '&'
				}

				url = url.slice(0, -1)
				window.location.href = url
			}
		}
	}
</script>

<style scoped>
	#category {
		width: 100vw;
		height: 100vh;
	}
	.content {
		margin-top: 120px;
	}
	.title-content {
		font-size: 25px;
		font-weight: bold;
		text-align: center;
		color: #4285F4;
	}
	.list-film {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.btn-prev, .btn-next {
		position: fixed;
		top: 50%;
	}
	.btn-prev {
		left: 20px;
	}
	.btn-next {
		right: 20px;
	}
	.list-category {
		width: 100%;
		position: fixed;
		top: 58px;
		left: 0px;
		z-index: 9;
		overflow-x: auto;
		overflow-y: hidden;
		display: flex;
	}
	.category {
		white-space: nowrap;
		padding: 5px 10px;
		background-color: #ccc;
		color: white;
	}
	.category:hover {
		background-color: #eee;
		cursor: pointer;
	}
	.category a {
		text-decoration: none;
		color: white;
	}
	.title-search-result {
		font-size: 17px;
	}
	@media (max-width: 575px) {
		.content {
			margin: 70px 0px;
		}
		.title-content {
			font-size: 17px;
		}
		.btn-prev, .btn-next {
			top: 70%;
		}
		.btn-prev {
			left: 0px;
		}
		.btn-next {
			right: 0px;
		}
	}
	@media (max-width: 767px) {
		.title-search-result {
			text-align: center;
		}
	}
</style>