import Vue from "vue"
import VueRouter from 'vue-router'
import Home from './layouts/Home.vue'
import Slides from './layouts/Slides.vue'

Vue.use(VueRouter)

const files = require.context('../slides/', true, /index\.md$/)
const slides = files.keys().map(key => {
  const slide = files(key).attributes
  const slug = key.split('/').slice(-2, -1)[0]
  slide.slug = slug
  return slide
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    ...slides.map(slide => {
        return {
          path: `/${slide.slug}`,
          component: Slides,
        }
    })
  ]
})

export default router
