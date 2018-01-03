const webpack = require('webpack')

var listRoute = [
  '/trang-chu',
  '/phim-moi',
  '/phim-le',
  '/phim-bo',

  '/phim-moi/ten-phim/page-1',
  '/phim-le/ten-phim/page-1',
  '/phim-bo/ten-phim/page-1',
  '/phim-hanh-dong/ten-phim/page-1',
  '/phim-hoat-hinh/ten-phim/page-1',
  '/phim-kinh-di/ten-phim/page-1',
  '/phim-vo-thuat/ten-phim/page-1',
  '/phim-chien-tranh/ten-phim/page-1',
  '/phim-hai-huoc/ten-phim/page-1',
  '/phim-vien-tuong/ten-phim/page-1',
  '/phim-phieu-luu/ten-phim/page-1',
  '/phim-than-bi/ten-phim/page-1',
  '/phim-co-trang/ten-phim/page-1',
  '/phim-khoa-hoc/ten-phim/page-1',
  '/phim-tinh-cam/ten-phim/page-1',
  '/phim-the-thao/ten-phim/page-1',
  '/phim-ca-nhac/ten-phim/page-1',
  '/phim-gia-dinh/ten-phim/page-1',
  '/phim-tai-lieu/ten-phim/page-1',
  '/phim-tv-show/ten-phim/page-1',
  '/phim-lich-su/ten-phim/page-1',
  '/phim-tam-ly/ten-phim/page-1',

  '/phim-moi/dao-dien/page-1',
  '/phim-le/dao-dien/page-1',
  '/phim-bo/dao-dien/page-1',
  '/phim-hanh-dong/dao-dien/page-1',
  '/phim-hoat-hinh/dao-dien/page-1',
  '/phim-kinh-di/dao-dien/page-1',
  '/phim-vo-thuat/dao-dien/page-1',
  '/phim-chien-tranh/dao-dien/page-1',
  '/phim-hai-huoc/dao-dien/page-1',
  '/phim-vien-tuong/dao-dien/page-1',
  '/phim-phieu-luu/dao-dien/page-1',
  '/phim-than-bi/dao-dien/page-1',
  '/phim-co-trang/dao-dien/page-1',
  '/phim-khoa-hoc/dao-dien/page-1',
  '/phim-tinh-cam/dao-dien/page-1',
  '/phim-the-thao/dao-dien/page-1',
  '/phim-ca-nhac/dao-dien/page-1',
  '/phim-gia-dinh/dao-dien/page-1',
  '/phim-tai-lieu/dao-dien/page-1',
  '/phim-tv-show/dao-dien/page-1',
  '/phim-lich-su/dao-dien/page-1',
  '/phim-tam-ly/dao-dien/page-1',

  '/phim-moi/dien-vien/page-1',
  '/phim-le/dien-vien/page-1',
  '/phim-bo/dien-vien/page-1',
  '/phim-hanh-dong/dien-vien/page-1',
  '/phim-hoat-hinh/dien-vien/page-1',
  '/phim-kinh-di/dien-vien/page-1',
  '/phim-vo-thuat/dien-vien/page-1',
  '/phim-chien-tranh/dien-vien/page-1',
  '/phim-hai-huoc/dien-vien/page-1',
  '/phim-vien-tuong/dien-vien/page-1',
  '/phim-phieu-luu/dien-vien/page-1',
  '/phim-than-bi/dien-vien/page-1',
  '/phim-co-trang/dien-vien/page-1',
  '/phim-khoa-hoc/dien-vien/page-1',
  '/phim-tinh-cam/dien-vien/page-1',
  '/phim-the-thao/dien-vien/page-1',
  '/phim-ca-nhac/dien-vien/page-1',
  '/phim-gia-dinh/dien-vien/page-1',
  '/phim-tai-lieu/dien-vien/page-1',
  '/phim-tv-show/dien-vien/page-1',
  '/phim-lich-su/dien-vien/page-1',
  '/phim-tam-ly/dien-vien/page-1'
]

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
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    routes () {
      return listRoute.map(function (route) {
        return {
          url: route,
          changefreq: 'daily',
          priority: 1,
          lastmodISO: new Date()
        }
      })
    }
  }
}
