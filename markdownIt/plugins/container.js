const markdownIt = require('markdown-it')

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true
})

md.use(require('markdown-it-emoji'))
md.use(require('markdown-it-sub'))
md.use(require('markdown-it-sup'))
md.use(require('markdown-it-mark'))
md.use(require('markdown-it-underline'))
md.use(require('markdown-it-bracketed-spans'))
md.use(require('markdown-it-attrs'), {
  leftDelimiter: '{{',
  rightDelimiter: '}}',
})
md.use(require('./katex'))

const defaultRender = md.renderer.rules.link_open || function (tokens, idx, options, env, self) {
  return self.renderToken(tokens, idx, options)
}

md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  if (tokens[idx].attrs[0][1].match('http')) {
    const tIdx = tokens[idx].attrIndex('target')
    if (tIdx < 0) {
      tokens[idx].attrPush(['target', '_blank'])
    } else {
      tokens[idx].attrs[tIdx][1] = '_blank'
    }

    const rIdx = tokens[idx].attrIndex('rel')
    if (rIdx < 0) {
      tokens[idx].attrPush(['rel', 'noopener noreferrer'])
    } else {
      tokens[idx].attrs[rIdx][1] = 'noopener noreferrer'
    }
  }
  return defaultRender(tokens, idx, options, env, self)
}

md.renderer.rules.emoji = (token, idx) => {
  return `<span class="emoji emoji_${token[idx].markup}">${token[idx].content}</span>`
}

module.exports = _md => _md.use(require('markdown-it-container'), 'container', {
  validate: () => true,
  render: (tokens, idx) => {
    if (tokens[idx].nesting === 1) {
      const header = tokens[idx].info.split(" ").filter(t => !t.startsWith(".")).join(" ")
      const classes = tokens[idx].info.split(" ").filter(t => t.startsWith(".")).map(t => t.slice(1, )).join(" ")
      return `<div class="container ${classes}"><div class="container-header">${md.render(header)}</div><div class="container-content">`
    } else {
      return '</div></div>\n'
    }
  }
})
