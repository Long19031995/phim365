<template>
	<a :href="'/chi-tiet/' + film.slug" class="film card">
	  	<div class="card-img-top" :style="'background-image: url(' + getThumbnailRoot(film) + ');'"></div>
	  	<div class="card-body">
	    	<div class="card-title">
	    		{{ film.title }}
	    	</div>
	    	<div class="card-source text-danger">
	    		{{ film.source }}
	    	</div>
	  	</div>
	</a>
</template>

<script>
	import store from '~/static/other/js/store.js'
	export default {
		props: ['film'],
		methods: {
			getThumbnailRoot: function(film) {
				return store.getThumbnailRoot(film)
			}
		}
	}
</script>

<style scoped>
	.film {
		width: 202px !important;
		height: 350px !important;
		margin: 10px 10px;
	}
	.film:hover {
		box-shadow: 0px 0px 20px #ccc;
	}
	a.film {
		text-decoration: none;
		color: black;
	}
	.card-img-top {
		width: 200px !important;
		height: 270px !important;
		background-position: center top;
  		background-repeat: no-repeat;
	}
	.card-title {
		padding: 10px;
		text-transform: capitalize;
		text-align: center;
	}
	.card-source {
		float: right;
		padding: 3px;
		font-size: 12px;
		/*color: red;*/
	}
</style>