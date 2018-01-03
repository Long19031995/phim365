<template>
	<div id="detail-component">
		<navbar></navbar>
		<section class="container content">
			<div class="row">
				<div class="col-md-4 col-xs-12 text-center">
					<img class="imgDetail" :src="getThumbnailRoot(film)" alt="">
				</div>
				<div class="col-md-8 col-xs-12">
					<div class="title">
						<h1>{{ film.title }}</h1>
					</div>
					<br>
					<div class="year">
						<b>Năm: </b>{{ film.year }}
					</div>
					<br>
					<div class="length">
						<b>Độ dài: </b>{{ film.length }}
					</div>
					<br>
					<div class="source">
						<span class="sourceSpan">
							{{ film.source }}
						</span>
					</div>
					<br>
					<div class="actors">
						<b>Diên viễn: </b>{{ film.actors }}
					</div>
					<br>
					<div class="description">
						<b>Giới thiệu: </b>{{ film.description }}
					</div>
					<br>
					<div class="watch">
						<button class="btn" @click="goWebSite(film.url)">
							Xem phim >>
						</button>
					</div>
				</div>
			</div>
		</section>
		<div class="list-relate container">
			<div class="title-relate">
				Phim Liên Quan
			</div>
			<carousel :listFilm="listFilm" :name="name" :query="query"></carousel>
		</div>
		<listTag :film="film"></listTag>
		<foo></foo>
	</div>
</template>

<script>
	import store from '~/static/other/js/store.js'
	import navbar from '~/components/navbar.vue'
	import listTag from '~/components/listTag.vue'
	import carousel from '~/components/carousel.vue'
	import foo from '~/components/foo.vue'
	export default {
		components: { navbar, listTag, carousel, foo },
		async asyncData (context) {
			let film = await store.getData('detailFilm', {
				id: context.params.slug
			})

		    let listFilm = await store.getData('searchFilm', {
		    	id: 0,
		    	offset: 0,
		    	size: 20,
		    	type: 'title',
		    	text: context.params.slug.replace(/-/g, ' ').replace(/\d+/g, '')
		    })

		    return {
		    	film: film,
		    	listFilm: listFilm,
		    	name: 'searchFilm',
		    	query: {
		    		id: 0,
		    		offset: 0,
		    		size: 20,
		    		type: 'title',
		    		text: context.params.slug.replace(/([^a-zA-Z])/g, ' ').trim()
		    	}
		    }
	  	},
	  	head () {
			return {
				title: 'Phim ' + this.film.title,
				meta: [
					{ name: 'description', content: this.film.description.replace(/\s+/g, ' ') },
					{ name: 'keywords', content: this.film.title.replace(/\s+/g, ' ') },
					{ property: 'og:title', content: this.film.title.replace(/\s+/g, ' ') },
					{ property: 'og:description', content: this.film.description.replace(/\s+/g, ' ') },
					{ property: 'og:image', content: store.getThumbnailRoot(this.film) }
				]
			}
		},
	  	methods: {
	  		goWebSite (url) {
	  			window.open(url)
	  		},
	  		getThumbnailRoot (film) {
	  			return store.getThumbnailRoot(film)
	  		}
	  	}
	}
</script>

<style scoped>
	.nav-bar {
		padding: 10px 0px;
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100vw;
		z-index: 10;
		background-color: white;
	}
	.btn-back {
		width: auto;
		height: 38px;
		margin: 10px;
		padding: 0px 20px;
		border: none;
		position: fixed;
		top: 0px;
		left: 0px;
		background-color: white;
		border: 1px solid #ccc;
	}
	.btn-back:hover {
		box-shadow: 0px 0px 20px #ccc;
		cursor: pointer;
	}
	.content {
		padding-top: 70px;
		padding-bottom: 20px;
	}
	.imgDetail {
		width: 100%;
		max-width: 300px;
	}
	.title {
		font-size: 30px;
		text-transform: capitalize;
		color: #34A853;
	}
	.year {
		color: #FBBC05;
	}
	.length {
		color: #4285F4;
	}
	.sourceSpan {
		background-color: #EA4335;
		color: white;
		padding: 10px;
		border-radius: 10px !important;
	}
	.actors {
		color: #FBBC05;
	}
	.description {
		color: #4285F4;
	}
	.watch button {
		background-color: #EA4335;
		color: white;
	}
	.watch button:hover {
		cursor: pointer;
	}
	.title-relate {
		font-size: 30px;
		font-weight: bold;
		color: #4285F4;
	}

	@media (max-width: 767px) {
		.title, .year, .length, .source, .actors, .description, .watch {
			text-align: center;
		}
		.btn-back {
			padding: 0px 10px
		}
	}
</style>