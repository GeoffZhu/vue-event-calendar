<!-- add by Yupi Li -->
<template>
  <div class="events-wrapper" :style="bgColor">
    <h2 class="date" v-if="showTitle">
      {{dayEventsTitle}}
    </h2>
    <slot>
      <div class="cal-events">
          <div v-for="(event, index) in events" class="event-item" :key="index">
            <cal-event-item :event="event" :index="index" :locale="locale"></cal-event-item>
          </div>
      </div>
    </slot>
  </div>
</template>

<script>
import i18n from '../i18n.js'
import { dateTimeFormatter } from '../tools.js'
import calEventItem from './cal-event-item.vue'
export default {
  name: 'cal-events',
  data () {
    return {
      i18n
    }
  },
  components: {
    'cal-event-item': calEventItem
  },
  props: {
    title: String,
    showTitle: {
        type: Boolean,
        default: true
    },
    dayEvents: {
      type: Object,
      required: true
    },
    locale: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  computed: {
    dayEventsTitle () {
      if (this.title) return this.title
      if (this.dayEvents.date !== 'all') {
        let tempDate
        if (this.dayEvents.events.length !== 0) {
          tempDate = Date.parse(new Date(this.dayEvents.events[0].date))
          return dateTimeFormatter(tempDate, i18n[this.locale].fullFormat)
        } else {
          tempDate = dateTimeFormatter(Date.parse(new Date(this.dayEvents.date)), i18n[this.locale].fullFormat)
          return `${tempDate} ${i18n[this.locale].notHaveEvents}`
        }
      } else {
        return i18n[this.locale].dayEventsTitle
      }
    },
    events () {
      return this.dayEvents.events
    },
    bgColor () {
      return {backgroundColor: this.color}
    }
  },
  methods: {
    dateTimeFormatter
  }
}
</script>