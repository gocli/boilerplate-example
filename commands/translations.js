const go = require('go')

// relatively to entry file
const trslPath = './translations.json'
const stringify = obj => JSON.stringify(obj, null, 2)
const fetchTranslations = () => go.readFile(trslPath).then(JSON.parse, () => ({}))

module.exports = [
  {
    name: 'translations',
    commands: [
      { name: 'add',
        async callback () {
          let data = {};
          const [origin, translation] = await go.ask([
            { message: 'What do you want to translate?' },
            { message: 'How to translate it?' }
          ])
          const content = stringify(Object.assign(await fetchTranslations(), { [origin]: translation }))
          await go.writeFile(trslPath, content)
        }
      },
      { name: 'find',
        async callback () {
          const translations = Object.entries(await fetchTranslations())
            .map(([origin, translation]) => `${origin} => ${translation}`)
          await go.ask({ message: 'searching what you need', source: translations })
        }
      },
      { name: 'delete',
        async callback () {
          const translations = await fetchTranslations()
          const origin = await go.ask({
            message: 'what do you want to delete?',
            source: Object.keys(translations)
          })
          await go.writeFile(trslPath, stringify({ ...translations, [origin]: undefined }))
        }
      }
    ]
  }
]