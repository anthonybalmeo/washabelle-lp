const withImages = require('next-images')
const withFonts = require('next-fonts')

module.exports = withImages(withFonts({
  assetPrefix: process.env.NODE_ENV === 'production' ? '/washabelle-lp' : '',
}))

