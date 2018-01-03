<template>
	<div class="test">
		<p>list film:</p>
		<ul>
			<li v-for="film in listFilm">
				{{film.title}}
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		async asyncData (context) {
			let listFilm = []

			try {
				let res = await axios.get('http://api-phim-oitest.193b.starter-ca-central-1.openshiftapps.com/searchFilm?id=0&text=đẹp&offset=0&size=20&type=title')
				listFilm = res.data.data
			} catch(e) {
				console.log(e)
			}

			return {
				listFilm: listFilm
			}
		},
		// data () {
		// 	return {
		// 		listFilm: []
		// 	}
		// },
		// async mounted () {
		// 	var self = this

		// 	try {
		// 		let res = await axios.get('http://api-phim-oitest.193b.starter-ca-central-1.openshiftapps.com/searchFilm?id=0&text=đẹp&offset=0&size=20&type=title')
		// 		self.listFilm = res.data.data
		// 	} catch(e) {
		// 		console.log(e)
		// 	}
		// }
	}
</script>