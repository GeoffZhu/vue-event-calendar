<template>
  <div class="events-wrapper">
    <h2 class="date">
      {{dayEventsTitle}}
    </h2>
    <div class="cal-events">
      <slot>
        <div v-for="(event, index) in dayEvents.events" class="event-item">
          <cal-event-item :event="event" :index="index" :locale="locale"></cal-event-item>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import i18n from '../i18n.js'
import { dateTimeFormatter } from '../tools.js'
export default {
  name: 'cal-events',
  data () {
    return {
      i18n
    }
  },
  props: {
    dayEvents: {
      type: Object,
      required: true
    },
    locale: {
      type: String,
      required: true
    }
  },
  computed: {
    dayEventsTitle () {
      if (this.dayEvents.date !== 'all') {
        if (this.dayEvents.events.length !== 0) {
          let tempDate = Date.parse(new Date(this.dayEvents.events[0].date))
          return dateTimeFormatter(tempDate, i18n[this.locale].fullFormat)
        } else {
          return i18n[this.locale].notHaveEvents
        }
      } else {
        return i18n[this.locale].dayEventsTitle
      }
    },
    events () {
      return dayEvents.events
    }
  },
  created () {
    console.log(this.$slots)
  },
  methods: {
    dateTimeFormatter
  }
}
</script>