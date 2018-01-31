const go = require('go')

go.registerCommand('install', async () => {
  const { name, bundle } = await go.ask([
    { message: 'Name your project:', default: 'my-project' },
    { message: 'Which bundle tool do you prefer',
      source: [ 'Rollup', 'Webpack', 'Browserify', 'Parcel' ].sort() }
  ])

  setTimeout(() => console.log('Build completed successfully!'), 1000)
})
