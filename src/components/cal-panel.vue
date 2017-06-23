<template>
  <div class="cal-wrapper">
    <div class="cal-header">
      <div class="l" @click="preMonth"><div class="arrow-left icon">&nbsp</div></div>
      <div class="title">{{curYearMonth}}</div>
      <div class="r" @click="nextMonth"><div class="arrow-right icon">&nbsp</div></div>
    </div>
    <div class="cal-body">
      <div class="weeks">
        <span v-for="dayName in i18n[calendar.options.locale].dayNames" class="item">{{dayName}}</span>
      </div>
      <div class="dates" >
        <div v-for="date in dayList" class="item"
          :class="{
            today: date.status ? (today == date.date) : false,
            event: date.status ? (date.title != undefined) : false,
            [calendar.options.className] : (date.date == selectedDay)
          }">
          <p class="date-num"
            @click="handleChangeCurday(date)"
            :style="{color: date.title != undefined ? ((date.date == selectedDay) ? '#fff' : customColor) : 'inherit'}">
            {{date.status ? date.date.split('/')[2] : '&nbsp'}}</p>
          <span v-if="date.status ? (today == date.date) : false" class="is-today" :style="{backgroundColor: customColor }" ></span>
          <span v-if="date.status ? (date.title != undefined) : false" class="is-event"
            :style="{borderColor: customColor, backgroundColor: (date.date == selectedDay) ? customColor : 'inherit'}"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from '../i18n.js'
import { dateTimeFormatter, isEqualDateStr} from '../tools.js'

const inBrowser = typeof window !== 'undefined'
export default {
  name: 'cal-panel',
  data () {
    return {
      i18n
    }
  },
  props: {
    events: {
      type: Array,
      required: true
    },
    calendar: {
      type: Object,
      required: true
    },
    selectedDay: {
      type: String,
      required: false
    }
  },
  computed: {
    dayList () {
        let firstDay = new Date(this.calendar.params.curYear+'/'+(this.calendar.params.curMonth+1)+'/01')
        let startTimestamp = firstDay-1000*60*60*24*firstDay.getDay()
        let item, status, tempArr = [], tempItem
        for (let i = 0 ; i < 42 ; i++) {
            item = new Date(startTimestamp + i*1000*60*60*24)
            if (this.calendar.params.curMonth === item.getMonth()) {
              status = 1
            } else {
              status = 0
            }
            tempItem = {
              date: `${item.getFullYear()}/${item.getMonth()+1}/${item.getDate()}`,
              status: status
            }
            this.events.forEach((event) => {
              if (isEqualDateStr(event.date, tempItem.date)) {
                tempItem.title = event.title
                tempItem.desc = event.desc || ''
              }
            })
            tempArr.push(tempItem)
        }
        return tempArr
    },
    today () {
      let dateObj = new Date()
      return `${dateObj.getFullYear()}/${dateObj.getMonth()+1}/${dateObj.getDate()}`
    },
    curYearMonth () {
      let tempDate = Date.parse(new Date(`${this.calendar.params.curYear}/${this.calendar.params.curMonth+1}/01`))
      return dateTimeFormatter(tempDate, this.i18n[this.calendar.options.locale].format)
    },
    customColor () {
      return this.calendar.options.color
    }
  },
  methods: {
    nextMonth () {
      this.$EventCalendar.nextMonth()
      this.$emit('month-changed', this.curYearMonth)
    },
    preMonth () {
      this.$EventCalendar.preMonth()
      this.$emit('month-changed', this.curYearMonth)
    },
    handleChangeCurday (date) {
      this.$emit('cur-day-changed', date.date)
    }
  }
}
</script>
