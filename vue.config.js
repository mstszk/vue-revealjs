const Mode = require('frontmatter-markdown-loader/mode')

module.exports = {
  chainWebpack(config){
    config.module.rule('md')
      .test(/\.md$/)
      .use('frontmatter-markdown-loader')
        .loader('frontmatter-markdown-loader')
        .options({
          mode: [Mode.VUE_RENDER_FUNCTIONS],
          vue: { root: 'slides-body' },
        })
      .end()
  },
}
