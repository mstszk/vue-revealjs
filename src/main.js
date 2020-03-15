import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mediumZoom from 'medium-zoom'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mounted() {
    mediumZoom('img')
  }
}).$mount('#app')
