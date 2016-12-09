import Vue from 'vue'
import App from './App.vue'

import vueEventCalendar from '../src'

Vue.use(vueEventCalendar, {locale: 'en'})

new Vue({
  el: '#app',
  render: h => h(App)
})
