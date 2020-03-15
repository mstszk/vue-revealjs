<script>
import Cover from './Cover.vue'
import SectionPage from './SectionPage.vue'
import Page from './Page.vue'
import Katex from './Katex.vue'
import Reveal from 'reveal.js/js/reveal'
import 'reveal.js/css/reveal.css'

export default {
  props: ['print'],
  components: { Cover, SectionPage, Page, Katex },
  data () {
    const slug = this.$route.path.slice(1)
    return {
      fm: require(`../../../slides/${slug}/index.md`),
      templateRender: null,
      height: 1080,
    }
  },
  render (createElement) {
    return this.templateRender ? this.templateRender() : createElement('div', 'Rendering')
  },
  created () {
    this.templateRender = this.fm.vue.render
    this.$options.staticRenderFns = this.fm.vue.staticRenderFns
    document.title = this.fm.attributes.title
  },
  mounted() {
    Reveal.initialize({
      width: this.width,
      height: this.height,
      margin: 0,
      center: false,
      hash: true,
      slideNumber: false,
      controls: false,
      hideCursorTime: 3000,
      transition: 'fade',
    })
    if (this.print) {
      require('reveal.js/css/print/pdf.css')
      require('./revealcss/print.css')
    } else {
      require('./revealcss/presentation.css')
    }
  },
  computed: {
    width() {
      const aspect = this.fm.attributes.aspect || '16:9'
      const [wr, hr] = aspect.split(':').map(s => parseInt(s))
      return Math.round(this.height / hr * wr)
    }
  }
}
</script>

<style lang="stylus">
.reveal
  height 100vh
  font-size 36px
  .progress
    height 5px
    color $accentColor
  .slides
    outline 2px dashed $accentColor
</style>
