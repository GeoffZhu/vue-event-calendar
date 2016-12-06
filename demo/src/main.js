import Vue from 'vue'
import App from './App.vue'

import vueEventCalendar from '../../dist'

console.log(vueEventCalendar)
Vue.use(vueEventCalendar, {locale: 'zh'})

new Vue({
  el: '#app',
  render: h => h(App)
})
