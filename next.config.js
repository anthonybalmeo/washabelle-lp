const withImages = require('next-images')
const withFonts = require('next-fonts')

module.exports = withImages(withFonts())

module.exports = {
  // some configuration
  assetPrefix: process.env.NODE_ENV === 'production' ? '/washabelle-lp' : '',
  // another configuration
}