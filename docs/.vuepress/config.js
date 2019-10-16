const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'METABUZZ',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/tomcam/metabuzz',
    editLinks: true,
    // Github base directory
    docsDir: '/docs/',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
	// Mysteriously the .md is implied in the link
        text: 'About',
        link: '/about',
      },
      {
        text: 'Contact',
        link: '/contact'
      },
    ],
    sidebar: {
      '/articles/' : [
	{
	  collapsable: false,
	  children: [
            '/articles/',
      	    '/articles/vuepress/',
      	    '/articles/github-pages/',
	  ]
	}
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
