const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@base': path.resolve(__dirname, 'src/base'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  }
}
