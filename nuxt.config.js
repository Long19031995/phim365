const webpack = require('webpack')

module.exports = {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'fb:pages', content: 'phim365.net' },
      { property: 'og:url', content: 'https://phim365.net/' },
      { property: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/oi-film.appspot.com/o/logo.png?alt=media&token=d78e74a6-064b-4838-af7e-35b0ea7e6923' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'phim365.net' },
      { property: 'og:locale', content: 'vi_VN' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '/other/css/common.css' }
    ],
    script: [
      { src: '/other/js/jquery.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js' },
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js' }
    ]
  },
  loading: { color: '#3B8070' }
}
