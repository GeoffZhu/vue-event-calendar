'use strict'

import vueEventCalendar from './vue-event-calendar.vue'

function install(Vue, options = {}) {
    const isVueNext = Vue.version.split('.')[0] === '2'
    const inBrowser = typeof window !== 'undefined'

    const DEFAULT_OPTION = {
        locale: 'zh', //en
        color: ' #f29543'
    }
    let Calendar = {
        $vm: null,
        bindEventBus (vm) {
            this.$vm = vm
        },
        toDate (dateString) {
            let dateArr = dateString.split('/')
            dateArr = dateArr.map((item) => {
                return parseInt(item, 10)
            })
            this.$vm.CALENDAR_EVENTS_DATA.params = {
                curYear: dateArr[0],
                curMonth: dateArr[1]-1,
                curDate: dateArr[2],
                curEventsDate: dateString
            }
        },
        nextMonth () {
            if (this.$vm.CALENDAR_EVENTS_DATA.params.curMonth < 11) {
                this.$vm.CALENDAR_EVENTS_DATA.params.curMonth++
            } else {
                this.$vm.CALENDAR_EVENTS_DATA.params.curYear++
                this.$vm.CALENDAR_EVENTS_DATA.params.curMonth = 0
            }
        },
        preMonth () {
            if (this.$vm.CALENDAR_EVENTS_DATA.params.curMonth > 0) {
                this.$vm.CALENDAR_EVENTS_DATA.params.curMonth--
            } else {
                this.$vm.CALENDAR_EVENTS_DATA.params.curYear--
                this.$vm.CALENDAR_EVENTS_DATA.params.curMonth = 11
            }
        }
    }

    const calendarOptions = Object.assign(DEFAULT_OPTION, options)
    let dateObj = new Date()
    const VueCalendarBarEventBus = new Vue({
        data: {
            CALENDAR_EVENTS_DATA: {
                options: calendarOptions,
                params: {
                    curYear: dateObj.getFullYear(),
                    curMonth: dateObj.getMonth(),
                    curDate: dateObj.getDate(),
                    curEventsDate: 'all'
                }
            }
        }
    })

    if (inBrowser) {
        window.VueCalendarBarEventBus = VueCalendarBarEventBus
        Calendar.bindEventBus(VueCalendarBarEventBus)
    }

    Vue.component('vue-event-calendar', vueEventCalendar)

    Vue.prototype.$Calendar = Calendar
}
export default {
    install
}
// dist can use
export {
    install
}
