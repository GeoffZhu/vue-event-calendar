<template>
  <div class="events-wrapper">
    <h2 class="date">
      {{dayEventsTitle}}
    </h2>
    <div class="cal-events">
      <div v-for="(event, index) in dayEvents.events" class="event-item">
        <h3 class="title">{{index+1}}. {{event.title}}</h3>
        <p class="time">{{dateTimeFormatter(Date.parse(new Date(event.date)),i18n[locale].fullFormat)}}</p>
        <p class="desc">{{event.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from '../i18n.js'
import { dateTimeFormatter } from '../tools.js'
export default {
  name: 'cal-event',
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
      if (this.dayEvents.title !== 'all') {
        let tempDate = Date.parse(new Date(this.dayEvents.events[0].date))
        return dateTimeFormatter(tempDate, i18n[this.locale].fullFormat)
      } else {
        return i18n[this.locale].dayEventsTitle
      }
    }
  },
  methods: {
    dateTimeFormatter
  }
}
</script>