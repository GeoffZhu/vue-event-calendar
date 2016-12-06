<template>
  <div class="__vev_calendar-wrapper">
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
              today: date.status ? (today==date.date) : false,
              event: date.status ? (date.title != undefined) : false
            }">
            <p class="date-num" @click="handleChangeCurday(date)">{{date.status ? date.date.split('/')[2] : '&nbsp'}}</p>
          </div>
        </div>
      </div>
    </div>
    <cal-events :dayEvents="dayEvents" :locale="calendar.options.locale"></cal-events>
  </div>
</template>
<script>
import i18n from './i18n.js'
import { dateTimeFormatter } from './tools.js'
import calEvents from './components/cal-events.vue'

const inBrowser = typeof window !== 'undefined'
export default {
  name: 'vueEventCalendar',
  components: {
    'cal-events': calEvents
  },
  data () {
    return {
      i18n,
      dayEvents: {
        title: 'all',
        events: this.events || []
      }
    }
  },
  props: {
    events: {
      type: Array,
      required: true
    }
  },
  computed: {
    calendar () {
      if (inBrowser) {
          return window.VueCalendarBarEventBus.CALENDAR_EVENTS_DATA
      } else {
        return {
          percent: 0,
          options: {
            canSuccess: true,
            show: false,
            color: 'rgb(19, 91, 55)',
            failedColor: 'red',
            thickness: '2px',
            transition: {
                speed: '0.2s',
                opacity: '0.6s'
            },
            location: 'top',
            autoRevert: true,
            inverse: false
          }
        }
      }
    },
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
            this.calendar.events.forEach((event) => {
              if (event.date === tempItem.date) {
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
    }
  },
  created () {
    this.$Calendar.init(this.events)
  },
  methods: {
    nextMonth () {
      this.$Calendar.nextMonth()
    },
    preMonth () {
      this.$Calendar.preMonth()
    },
    handleChangeCurday (date) {
      if (date.title != undefined) {
        this.dayEvents = {
          title: date.date,
          events: this.calendar.events.filter(function(event) {
            if (event.date === date.date) {
              return true
            } else {
              return false
            }
          })
        }
      }
      console.log(this.dayEvents)
    }
  }
}
</script>
<style lang="less">
@base-orange: #f29543;
@white: #ffffff;
@gray: #e0e0e0;
@gray-dark: #b1b1b1;
@large-padding: 15px;
@small-padding: 10px;

@icon-border-size: 1px;
@media screen and (min-width: 768px) {
  .__vev_calendar-wrapper{
    max-width: 1200px;
    margin: 0 auto;
    .cal-wrapper{
      width: 50%;
      padding: 100px 50px;
      .date-num{
        line-height: 50px;
      }
    }
    .events-wrapper{
      width: 50%;
      background-color: @base-orange;
      color: @white;
      padding: 40px 50px;
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
    }
  }
}
@media screen and (max-width: 768px) {
  .__vev_calendar-wrapper{
    .cal-wrapper{
      width: 100%;
      padding: 10px 5px;
      .date-num{
        line-height: 42px;
      }
    }
    .events-wrapper{
      width: 100%;
      margin-top: 10px;
      padding: 10px;
    }
  }
}
.__vev_calendar-wrapper{
  position: relative;
  overflow: hidden;
  width: 100%;
  *{
    box-sizing: border-box;
  }
  .cal-wrapper{
    .cal-header{
      position: relative;
      width: 100%;
      background-color: @white;
      // box-shadow: 0 6px 5px rgba(0,0,0,.1);
      font-weight: 500;
      overflow: hidden;
      padding-bottom: 10px;
      &>div{
        float: left;
        line-height: 20px;
        padding: @large-padding;
      }
      .title{
        width: 60%;
        text-align: center;
      }
      .l{
        text-align: left;
        width: 20%;
        cursor: pointer;
        user-select: none;
      }
      .r{
        text-align: right;
        width: 20%;
        cursor: pointer;
        user-select: none;
      }
    }
    .cal-body{
      width: 100%;
      .weeks{
        width: 100%;
        overflow: hidden;
        text-align: center;
        font-size: 1rem;
        // border-right: 1px solid @gray;
        // border-left: 1px solid @gray;
        .item{
          line-height: 50px;
          float: left;
          width: 14.285%;
        }
      }
      .dates{
        width: 100%;
        overflow: hidden;
        text-align: center;
        font-size: 1rem;
        // border-right: 1px solid @gray;
        // border-bottom: 1px solid @gray;
        .item{
          position: relative;
          float: left;
          display: block;
          width: 14.285%;
          cursor: default;
          .date-num{
            font-size: 1rem;
          }

          &.event{
            color: #f29543;
            cursor: pointer;
          }
          &.event:after{
            content: '';
            border: 1px solid #f29543;
            background-color: #fff;
            border-radius: 50%;
            width: 36px;
            height: 36px;
            position: absolute;
            left: 50%;
            top: 50%;
            z-index: -2;
            margin-left: -18px;
            margin-top: -19px;
          }
          &.today{
            color: @white;
          }
          &.today:before{
            content: '';
            border: 1px solid #f29543;
            background-color: #f29543;
            border-radius: 50%;
            width: 36px;
            height: 36px;
            position: absolute;
            left: 50%;
            top: 50%;
            z-index: -1;
            margin-left: -18px;
            margin-top: -19px;
          }
        }
      }
    }
  }
  .events-wrapper{
    border-radius: 10px;
    .cal-events{
      height: 100%;
    }
    .date{
      width: 40%;
      min-width: 200px;
      text-align: center;
      color: @white;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 20px;
      margin: 0 auto;
      font-size: 22px;
    }
    .event-item{
      padding: 5px 20px;
      margin-top: 15px;
      box-shadow: 0 3px 11px 2px rgba(0,0,0,.1);
      background-color: #fff;
      border-radius: 5px;
      position: relative;
      .title{
        height: 40px;
        line-height: 40px;
        color: #323232;
        font-size: 16px;
        border-bottom: 1px solid #f2f2f2;
      }
      .time{
        position: absolute;
        right: 30px;
        top: 17px;
        color: #9b9b9b;
        font-size: 14px;
      }
      .desc{
        color: #9b9b9b;
        font-size: 14px;
        padding: 7px 0;
      }
    }
  }
}

.arrow-left.icon {
  color: #000;
  position: absolute;
  left: 6%;
  margin-top: 10px;
}
.arrow-left.icon:before {
  content: '';
  position: absolute;
  left: 1px;
  top: -5px;
  width: 10px;
  height: 10px;
  border-top: solid @icon-border-size currentColor;
  border-right: solid @icon-border-size currentColor;
  -webkit-transform: rotate(-135deg);
          transform: rotate(-135deg);
}
.arrow-right.icon {
  color: #000;
  position: absolute;
  right: 6%;
  margin-top: 10px;
}
.arrow-right.icon:before {
  content: '';
  position: absolute;
  right: 1px;
  top: -5px;
  width: 10px;
  height: 10px;
  border-top: solid @icon-border-size currentColor;
  border-right: solid @icon-border-size currentColor;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}
p{
  margin: 0;
  padding: 0;
}
</style>