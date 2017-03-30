import Vue from 'vue'
import App from './App.vue'

import vueEventCalendar from '../src/'
// import vueEventCalendar from '../dist'
// import '../dist/style.css'
Vue.use(vueEventCalendar, {locale: 'pt-br'})

new Vue({
  el: '#app',
  render: h => h(App)
})
