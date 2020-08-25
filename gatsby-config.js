module.exports = {
  siteMetadata: {
    title: "JUAN SAINZ",
    author: "arroyocoder",
    description: "Juan Sainz"
  },
  plugins: [

    `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/assets/images`,
    },
  },
  {
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [`gatsby-remark-responsive-iframe`],
  },
},
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#f7f0eb',
        display: 'minimal-ui',
        icon: 'src/assets/images/juanlogo.svg'

      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
