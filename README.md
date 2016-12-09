# vue-event-calendar

> A simple events calendar for Vue2, no dependencies except Vue2. responsive & mobile first

## Usage
main.js
```javascript
import vueEventCalendar from 'vue-event-calendar'
Vue.use(vueEventCalendar, {locale: 'en'}) //locale can be 'zh' or 'en'
```

component file .vue
```
<template>
  <vue-event-calendar :events="demoEvents"></vue-event-calendar>
</template>

<script>
export default {
  data () {
    return {
      demoEvents: [{
        date: '2016/12/15',
        title: 'eat',
        desc: 'longlonglong description'
      },{
        date: '2016/11/12',
        title: 'this is a title'
      }]
    }
  }
}
</script>
```
## Customization
```
<template>
  <vue-event-calendar :events="demoEvents">
      <template scope="props">
        <div v-for="(event, index) in props.showEvents" class="event-item">
          <!-- In here do whatever you want, make you owner event template -->
          {{event}}
        </div>
      </template>
    </vue-event-calendar>
</template>

<script>
export default {
  data () {
    return {
      demoEvents: [{
        date: '2016/12/15',
        title: 'eat',
        desc: 'longlonglong description'
      },{
        date: '2016/11/12',
        title: 'this is a title'
      }]
    }
  }
}
</script>
```


More in [Demo](https://github.com/GeoffZhu/vue-event-calendar/tree/master/demo)

## Develop
```
npm run dev  //develop
npm run build //production
```


