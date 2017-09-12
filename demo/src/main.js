import Vue from 'vue'
import App from './App.vue'

import 'vue-event-calendar/dist/style.css'
// import vueEventCalendar from 'vue-event-calendar'
import vueEventCalendar from '../../dist/index.js'

Vue.use(vueEventCalendar, {locale: 'en'})

window.Vue = Vue
new Vue({
  el: '#app',
  render: h => h(App)
})
