const go = require('go')
const setCmd = require('./commands/set')
const clearCmd = require('./commands/clear')
const translationsCmd = require('./commands/translations')
const generate = require('./commands/generate')

go.registerCommand('ping', () => console.log('pong')) // cli

go.registerCommand('pong', async () => {
  if (await go.confirm('did you mean ping?')) {
    console.log("> ping")
    go.executeCommand('ping')
  }
}) // cli, quiz

go.registerCommand(setCmd) // cli, fs, quiz

go.registerCommand(clearCmd) // cli, quiz

go.registerCommand(translationsCmd) // cli, fs, quiz

go.registerCommand(generate) // cli, template, quiz