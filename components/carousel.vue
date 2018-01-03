<template>
	<div id="carousel">
		<ul class="list-film">
	    	<li v-for="film in listFilm">
	    		<filmCard :film="film"></filmCard>
			</li>
		</ul>
		<div @click="prev()" class="prev d-flex flex-column justify-content-center">
			<div class="d-flex justify-content-center">
				<i class="fa fa-chevron-left"></i>
			</div>
		</div>
		<div @click="next()" class="next d-flex flex-column justify-content-center">
			<div class="d-flex justify-content-center">
				<i class="fa fa-chevron-right"></i>
			</div>
		</div>
	</div>
</template>

<script>
	import store from '~/static/other/js/store.js'
	import filmCard from '~/components/filmCard.vue'
	export default {
		props: ['listFilm', 'name', 'query'],
		components: { filmCard },
		data () {
			return {
		  		currentIndex: 0,
		  		totalSize: 20
			}
		},
	  	methods: {
	  		prev () {
	  			let offset = $('.list-film').scrollLeft() - 222
	  			$('.list-film').animate({ scrollLeft: offset })

	  			this.currentIndex--
	  		},
	  		next () {
	  			let offset = $('.list-film').scrollLeft() + 222
	  			$('.list-film').animate({ scrollLeft: offset })

	  			this.currentIndex++
	  			this.checkLoadMore()
	  		},
	  		async checkLoadMore () {
	  			if (this.currentIndex >= this.totalSize - 10) {
	  				this.query.offset++
				    this.totalSize += 20

	  				let data = await store.getData(this.name, this.query)
				    for (var i = 0; i < data.length; i++) {
				    	this.listFilm.push(data[i])
				    }
	  			}
	  		}
	  	}
	}
</script>

<style scoped>
	#carousel {
		position: relative;
		width: 100%;
		height: 400px;
	}
	.list-film {
		display: flex;
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: 1;
		padding-left: 100px;
	}
	.prev {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100px;
		height: 100%;
		background-color: white;
		z-index: 2;
	}
	.next {
		position: absolute;
		top: 0px;
		right: 0px;
		width: 100px;
		height: 100%;
		background-color: white;
		z-index: 2;
	}
	.fa-chevron-left, .fa-chevron-right {
		width: 50px;
		height: 50px;
		text-align: center;
		line-height: 50px;
		vertical-align: middle;
		border: 1px solid #ccc;
		font-size: 25px;
		color: #ccc;
	}
	.fa-chevron-left:hover, .fa-chevron-right:hover {
		border: 1px solid #eee;
		color: #eee;
		cursor: pointer;
	}
	ul {
		list-style: none;
	}

	@media (max-width: 575px) {
		.list-film {
			padding-left: 39px;
		}
		.prev {
			width: 50px;
		}
		.next {
			width: 50px;
		}
	}
</style>