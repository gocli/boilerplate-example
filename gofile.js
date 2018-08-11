const go = require('go')
const opn = require('opn')
const setCmd = require('./commands/set')
const clearCmd = require('./commands/clear')
const translationsCmd = require('./commands/translations')
const generate = require('./commands/generate')

go.registerCommand('ping', () => console.log('pong'))

go.registerCommand('pong', async () => {
  if (await go.confirm('did you mean ping?')) {
    console.log("> ping")
    go.executeCommand('ping')
  }
})

go.registerCommand('install', async () => {
  console.log('Welcome to Go Boilerplate Example!')
  if (await go.confirm('Do you want to read more about it?')) opn('http://gocli.io', { wait: false })
  console.log('To try out this template navigate to its folder and run:\n $ go')
})

go.registerCommand(setCmd)

go.registerCommand(clearCmd)

go.registerCommand(translationsCmd)

go.registerCommand(generate)