import Vue from 'vue'
import App from './App.vue'
///import ninjas1 from './ninjas.vue' registering globally

//Vue.component('ninjastemplate',ninjas1)  registering globally
new Vue({
  el: '#app',
  render: h => h(App)
})
