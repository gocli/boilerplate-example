const go = require('go')

// relatively to entry file
const trslPath = './translations.json'
const componentsPath = './components'

module.exports = {
  name: 'clear',
  description: 'clean working direcory',
  async callback ({ args }) {
    if (args.sure || await go.confirm('Are you sure you want to clear working directory?', false)) {
      console.log('cleaning')
      await Promise.all([
        go.remove(trslPath),
        go.remove(componentsPath)
      ])
    }
  },
  options: { sure: Boolean }
}