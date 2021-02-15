// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'DnD5',
  siteUrl: 'https://dnd5.barnesy.me',
  pathPrefix: '/dnd-gridsome',
  plugins: [
    {
      use: 'gridsome-source-graphql',
      options: {
        url: 'https://www.dnd5eapi.co/graphql',
        fieldName: 'monsters',
        typeName: 'Monsters'
      },
    },
  ]
}
