module.exports = md => {
  function isH2(token) {
    return token.tag === 'h2'
  }

  function isH3(token) {
    return token.tag === 'h3'
  }

  function isSep(token) {
    return isH2(token) || isH3(token)
  }

  function nextDivider(tokens, start) {
    for (let i = start; i < tokens.length; i++) {
      const token = tokens[i]
      if (isSep(token)) {
        return i
      }
    }
    return -1
  }

  function presentationOpen(state) {
    var token = new state.Token('presentation_open', 'section', 1)
    token.block = true
    token.attrs = [
      ['class', 'reveal']
    ]
    return token
  }

  function presentationClose(state) {
    return new state.Token('presentation_close', 'section', -1)
  }

  function cover(state) {
    return new state.Token('cover', '', 0)
  }

  function slidesOpen(state) {
    var token = new state.Token('slides_open', 'div', 1)
    token.block = true
    token.attrs = [
        ['class', 'slides']
    ]
    return token
  }

  function slidesClose(state) {
    return new state.Token('slides_close', 'div', -1)
  }

  function slideOpen(state) {
    return new state.Token('slide_open', 'section', 1)
  }

  function slideClose(state) {
    return new state.Token('slide_close', 'section', -1)
  }


  function sectionOpen(state) {
    var _token = new state.Token('section_open', '', 1)
    _token.block = true
    return _token
  }

  function sectionClose(state) {
      return new state.Token('section_close', '', -1)
  }

  function pageOpen(state) {
    var _token = new state.Token('page_open', '', 1)
    _token.block = true
    return _token
  }

  function pageClose(state) {
      return new state.Token('page_close', '', -1)
  }

  function contentOpen(state, token) {
    if (isH2(token)) return sectionOpen(state)
    return pageOpen(state)
  }

  function contentClose(state, token) {
    if (isH2(token)) return sectionClose(state)
    return pageClose(state)
  }

  md.core.ruler.push('revealjs', state => {
    let divIdx = 0
    let prevToken = undefined
    for (let i = 0;;i++) {
      divIdx = nextDivider(state.tokens, divIdx)
      if (divIdx === -1) break
      const token = state.tokens[divIdx]
      let tags = []
      if (prevToken !== undefined) {
        tags.push(contentClose(state, prevToken))
        tags.push(slideClose(state))
      }
      tags.push(slideOpen(state))
      tags.push(contentOpen(state, token))
      prevToken = token
      state.tokens.splice(divIdx, 0, ...tags)
      divIdx = divIdx + tags.length + 3
    }
    if (prevToken !== undefined) {
      state.tokens.push(contentClose(state, prevToken))
      state.tokens.push(slideClose(state))
    }

    state.tokens.unshift(slideClose(state))
    state.tokens.unshift(cover(state))
    state.tokens.unshift(slideOpen(state))
    state.tokens.unshift(slidesOpen(state))
    state.tokens.unshift(presentationOpen(state))
    state.tokens.push(slidesClose(state))
    state.tokens.push(presentationClose(state))
    // console.log(state.tokens)
  })

  md.renderer.rules.cover = () => { return '<Cover/>\n' }
  md.renderer.rules.section_open = () => { return '<SectionPage>\n' }
  md.renderer.rules.section_close = () => { return '</SectionPage>\n' }
  md.renderer.rules.page_open = () => { return '<Page>\n' }
  md.renderer.rules.page_close = () => { return '</Page>\n' }
}
