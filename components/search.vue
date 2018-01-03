<template>
	<div id="search-component" class="d-flex justify-content-center">
		<div class="search">
			<input @keyup="search()"
				   @keyup.enter="goCategory()"
				   v-model="keySearch"
				   type="text"
				   placeholder="Tìm kiếm..." 
				   class="form-control">
			<button @click="goCategory()" class="btn-search btn-search-medium">Tìm kiếm</button>
			<ul v-if="keySearch !== ''" class="list-search">
				<li v-for="film in listSearch" @click="goDetail(film)">
					<div class="title">
						{{ film.title }}
					</div>
					<div class="source">
						{{ film.source.split('.')[0] }}
					</div>
				</li>
			</ul>
		</div>
		<div class="background"></div>
	</div>
</template>

<script>
	import store from '~/static/other/js/store.js'
	export default {
		props: ['film'],
		data () {
			return {
				listSearch: [],
				keySearch: '',
				fDelay: {}
			}
		},
		mounted () {
			this.setFocus()
			if (this.$route.query.keySearch !== undefined) {
				this.keySearch = this.$route.query.keySearch.replace(/\-/g, ' ').trim()
			}
		},
		methods: {
			setFocus () {
				$('input').focus(function () {
					$('.background').fadeIn('fast')
					$('.list-search').fadeIn('fast')
				})
				$('.background').click(function () {
					$('.background').fadeOut('fast')
					$('.list-search').fadeOut('fast')
				})
			},
			search () {
				var self = this

				window.clearTimeout(self.fDelay)
				self.fDelay = window.setTimeout(async function () {
					self.listSearch = await store.getData('searchFilm', {
						id: 0,
						text: self.keySearch,
						offset: 0,
						size: 20,
						type: 'title'
					})
				}, 1000)
			},
			goCategory () {
				var self = this

				let url = '/phim-moi/ten-phim/page-1'
				if (self.keySearch !== '') {
					url += '?keySearch=' + self.keySearch.trim().replace(/\s+/g, '-')
				}

				window.location.href = url
			},
			goDetail (film) {
				let url = '/chi-tiet/' + film.slug

				window.location.href = url
			}
		}
	}
</script>

<style scoped>
	.search {
		width: 50%;
		position: relative;
		z-index: 10;
	}
	.list-search {
		position: absolute;
		top: 39px;
		left: 0px;
		width: 100%;
		max-height: 200px;
		background-color: white;
		overflow-x: hidden;
		overflow-y: auto;
	}
	input {
		z-index: 10;
		border: 1px solid #ccc;
	}
	input:focus {
		border: 1px solid #ccc;
	}
	ul {
		margin: 0px;
		padding: 0px;
		list-style: none;
	}
	li {
		width: 100%;
		height: 30px;
		padding: 0px 10px;
		line-height: 30px;
		vertical-align: middle;
		text-transform: capitalize;
	}
	li:hover {
		background-color: #eee;
		cursor: pointer;
	}
	.title {
		float: left;
		width: 70%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-align: left;
		color: #4285F4;
		font-size: 17px;
	}
	.source {
		float: left;
		width: 30%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-align: right;
		color: #EA4335;
		font-size: 14px;
	}
	.btn-search {
		height: 38px;
		position: absolute;
		z-index: 11;
		top: 0px;
		right: 0px;
		background-color: #34A853;
		border: none;
		color: white;
		font-weight: bold;
	}
	.btn-search:hover {
		cursor: pointer;
	}
	.background {
		z-index: 9;
		position: fixed;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		background-color: black;
		opacity: 0.2;
		display: none;
	}
	@media (max-width: 767px) {
		.search {
			width: 70%;
		}
		.list-search {
			max-height: 250px;
		}
		.btn-search {
			display: none;
		}
	}
</style>