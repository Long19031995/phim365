import axios from 'axios'

export default {
	baseUrl: 'http://api.phim365.net',
	getData: async function (name, query) {
		let url = this.baseUrl + '/' + name + '?'
		if (query !== undefined) {
			let listKey = Object.keys(query)
			for (var i = 0; i < listKey.length; i++) {
				let key = listKey[i]
				let value = query[key]
				url += (key + '=' + value + '&')
			}
		}

		let data
		try {
			let res = await axios.get(url)
			data = res.data.data
		} catch(e) {
			// no body
		}

		return data
	},
	getValue: function (param, listCategory) {
		if (param === undefined) {
			return ''
		} else if (param.includes('page-')) {
			return Number(param.replace('page-', '')) - 1
		}else if (param === 'ten-phim') {
			return 'title'
		} else if (param === 'title') {
			return 'ten-phim'
		} else if (param === 'dien-vien') {
			return 'actors'
		} else if (param === 'actors') {
			return 'dien-vien'
		} else if (param === 'dao-dien') {
			return 'director'
		} else if (param === 'director') {
			return 'dao-dien'
		} else if (listCategory !== undefined) {
			for (var i = 0; i < listCategory.length; i++) {
				if (param === listCategory[i].slug) {
					return listCategory[i].id
				}
			}
		} else {
			param = param.toLowerCase()
						 .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
						 .replace(/đ/g, "d")
						 .replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y")
						 .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u")
						 .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ.+/g,"o")
						 .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ.+/g, "e")
						 .replace(/ì|í|ị|ỉ|ĩ/g,"i")
						 .replace(/-/g, ' ')
						 .trim()
		}

		return param
	},
	getThumbnailRoot: function (film) {
		if (film === undefined || film.thumbnail_root === undefined) {
			return ''
		}
		var thumbnail = film.thumbnail_root

		if (thumbnail.includes('phimbathu') || thumbnail.includes('bilutv')) {
			thumbnail = 'https://image.phim365.net/upload/w_300,h_400/' + thumbnail
		}
		return thumbnail
	},
	getUrlSlide: function (context, type) {
		let url = '/' + context.params.category + '/' + context.params.group + '/'

		if (type === 'prev') {
			url += 'page-' + (Number(context.params.page.replace('page-', '')) - 1)
		} else if (type === 'next') {
			url += 'page-' + (Number(context.params.page.replace('page-', '')) + 1)
		}

		url += '?'
		if (context.query.keySearch !== undefined) {
			url += 'keySearch=' + context.query.keySearch + '&'
		}
		if (context.query.source !== undefined) {
			url += 'source=' + context.query.source + '&'
		}
		if (context.query.year !== undefined) {
			url += 'year=' + context.query.year + '&'
		}

		url = url.slice(0, -1)
		return url
	}
}