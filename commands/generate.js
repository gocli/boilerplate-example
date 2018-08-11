const go = require('go')

const jsAsset = {
  name: 'js',
  description: 'JavaScript asset',
  async callback ({ args }) {
    const name = args.name
      || args._.length === 3 && args._.slice(-1)[0]
      || await go.ask('how do we name it?')
    const dest = `assets/${name}.js`
    await go.processTemplates({ name }, '.templates/assets/tmpl.js', dest)
    console.log(`${dest} was generated`)
  }
}

const cssAsset = {
  name: 'css',
  description: 'CSS asset',
  async callback ({ args }) {
    const name = args.name
      || args._.length === 3 && args._.slice(-1)[0]
      || await go.ask('how do we name it?')
    const date = new Date().toString().split(' ').slice(1, 4).join(' ')
    const dest = `assets/${name}.css`
    await go.processTemplates({ name, date }, '.templates/assets/tmpl.css', dest)
    console.log(`${dest} was generated`)
  }
}

const component = {
  name: 'component',
  description: 'JS & CSS',
  async callback ({ args }) {
    const name = args.name
      || args._.length === 3 && args._.slice(-1)[0]
      || await go.ask('how do we name it?')
    const date = new Date().toString().split(' ').slice(1, 4).join(' ')
    const dest = ({ ext }) => `components/${name}${ext}`
    const res = await go.processTemplates({ name, date }, '.templates/assets/*', dest)
    console.log(`components/${name} was generated`, res)
  }
}

module.exports = {
  name: 'generate',
  async callback () {
    await go.ask({
      message: 'what do you want to generate?',
      choices: ['js', 'css']
    })
  },
  commands: [
    jsAsset,
    cssAsset,
    component
  ]
}