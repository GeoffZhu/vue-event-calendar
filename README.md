# vue-event-calendar

> A simple events calendar for Vue2, no dependencies except Vue2. responsive & mobile first

## Usage
```javascript
import vueEventCalendar from 'vue-event-calendar'
Vue.use(vueEventCalendar, {locale: 'en'}) //locale can be 'zh' or 'en'
```

In component file .vue
```
<vue-event-calendar :events="events"></vue-event-calendar>

events: [{
  date: '2016/12/15',
  title: 'eat',
  desc: 'longlonglong description'
},{
  date: '2016/11/12',
  title: 'this is a title'
}],
events2: [{
  date: '2016/12/15',
  title: 'eat',
  desc: 'longlonglong description'
},{
  date: '2016/11/12',
  title: 'this is a title'
}]
```

More in [demo](https://github.com/GeoffZhu/vue-event-calendar/tree/master/demo)

## Develop
```
npm run dev  //develop
npm run build //production
```


