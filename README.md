# vue-event-calendar

> A simple events calendar for Vue2, no dependencies except Vue2. responsive & mobile first.
> [Live Demo Here](http://geoffzhu.cn/vue-event-calendar/)

![](http://o80ronwlu.bkt.clouddn.com/vue-event-calendar.gif)

[![npm version](https://img.shields.io/npm/v/vue-event-calendar.svg)](https://www.npmjs.com/package/vue-event-calendar)

[中文文档](https://github.com/GeoffZhu/vue-event-calendar/blob/master/README.zh.md)

## Requirements
- vue: ^2.0.0

## Usage
#### install

``` sh
 npm install vue-event-calendar --save
```

#### main.js

```javascript
import 'vue-event-calendar/dist/style.css' //^1.1.10, CSS has been extracted as one file, so you can easily update it.
import vueEventCalendar from 'vue-event-calendar'
Vue.use(vueEventCalendar, {locale: 'en'}) //locale can be 'zh' , 'en' , 'es', 'pt-br', 'ja', 'ko', 'fr', 'it', 'ru', 'de', 'vi'
```

#### file.vue

```vue
<template>
  <vue-event-calendar :events="demoEvents"></vue-event-calendar>
</template>

<script>
export default {
  data () {
    return {
      demoEvents: [{
        date: '2016/11/12', // Required
        title: 'Foo' // Required
      }, {
        date: '2016/12/15',
        title: 'Bar',
        desc: 'description',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }]
    }
  }
}
</script>
```

## Custom date title

```vue
<template>
  <vue-event-calendar :title="title" :events="demoEvents" @dayChanged="handleDayChange"></vue-event-calendar>
</template>
```

In most cases, the default date string is enough，but when you want a custom date title, you can give a prop ```title```.
It is important to noticed that the title will be replaced with a static String you passed in. You need to monitor the dayChanged event and change the title by youself.

## Customization event template
If you want customization event template. required Vue: ^2.1.0. Because I use new feature(Scoped Slots) of ^2.1.0

```vue
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

## Component Events
Can handle two Events, @day-changed and @month-changed, callback params like ``` {date: '2017/06/23', events: []} ```.

```javascript
<template>
  <vue-event-calendar
    :events="demoEvents"
    @day-changed="handleDayChanged"
    @month-changed="handleMonthChanged">
  </vue-event-calendar>
</template>
```

## Options

```
  // When Vue.use, options
  {
    locale: 'en',
    color: 'black', //Set main color
    className: 'Custom className for current clicked date', // (default: 'selected-day')
    weekStartOn: 'week Start on which day'  // Can be: 1, 2, 3, 4, 5, 6, 0 (default: 0)
  }
```

## API
```javascript
// NextMonth
this.$EventCalendar.nextMonth()
```
```javascript
// PreMonth
this.$EventCalendar.preMonth()
```
```javascript
//ToDate
this.$EventCalendar.toDate('2016/11/12')
```
More in [Demo Folder](https://github.com/GeoffZhu/vue-event-calendar/tree/master/demo)

## Develop
```
npm run dev  //develop
npm run build //production
```

## Change log

##### 1.3.6 -> 1.4.0

- Remove today background, use a small dot below the date
- Increase the selected date style

##### 1.4.0 -> 1.4.8

- Add week start on

## License

[MIT](https://opensource.org/licenses/MIT)