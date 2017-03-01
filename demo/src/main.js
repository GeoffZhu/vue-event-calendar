import Vue from 'vue'
import App from './App.vue'

import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar'

Vue.use(vueEventCalendar, {locale: 'en'})

new Vue({
  el: '#app',
  render: h => h(App)
})
