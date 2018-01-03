<template>
	<div v-if="listTag.length > 0" class="container list-tag">
		<div class="title">Từ khóa nổi bật</div>
		<div v-for="tag in listTag" class="tag">
			<a :href="getUrl(tag)">
				{{ tag }}
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['film'],
		data () {
			return {
				listTag: []
			}
		},
		mounted () {
			this.getListTag()
		},
		methods: {
	  		getListTag () {
				var self = this

				var listTag = self.film.tags.split(';')
				listTag.forEach(function(tag) {
					if (5 < tag.length && tag.length < 25 && tag !== '' && tag !== ' ' && tag !== '  ') {
						self.listTag.push(tag)
					}
				})
			},
			getUrl (tag) {
				return '/phim-moi/ten-phim/page-1?keySearch=' + tag.trim().replace(/\s+/g, '-')
			}
		}
	}
</script>

<style scoped>
	.list-tag {
		margin-bottom: 20px;
		height: auto;
	}
	.list-tag::after {
		display: block;
	    content: "";
	    clear: both;
	}
	.title {
		font-size: 30px;
		font-weight: bold;
		color: #FBBC05;
	}
	.tag {
		background-color: #FBBC05;
		text-transform: capitalize;
		padding: 5px;
		margin: 5px;
		float: left;
	}
	.tag a {
		color: white;
		text-decoration: none;
	}
	@media (max-width: 575px) {
		.list-tag {
			display: none;
		}
	}
</style>