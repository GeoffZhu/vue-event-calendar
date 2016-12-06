<template>
  <div id="app">
    <h1>vue-event-calendar</h1>
    <vue-event-calendar :events="events"></vue-event-calendar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      events: [{
        date: '2016/12/15',
        title: '喝水',
        desc: 'hdasdhiodwidaojio'
      },{
        date: '2016/11/12',
        title: '喝水'
      }]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}

h1, h2, h3 {
  font-weight: normal;
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
