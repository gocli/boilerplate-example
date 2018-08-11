const go = require('go')
const path = require('path')

const pkgPath = path.resolve(__dirname, '../package.json')

module.exports = {
  name: 'set',
  description: 'change properties in package.json',
  async callback ({ args }) {
    const pkgPath = './package.json'
    const attr = args._[1] || await go.ask('What property do you want to change?')
    const val = args._[2] || await go.ask(`What value do you want to set to ${attr}?`)

    const pkgContent = await go.readFile(pkgPath)
    const pkg = { ...JSON.parse(pkgContent), [attr]: val }
    await go.writeFile(pkgPath, JSON.stringify(pkg, null, 2))
  }
}