<template> <!-- this is the root componnent -->
  <div>
  <app-header v-bind:status="statusString" v-on:changeStatusEvent="updateStatus"></app-header>
    <h1> {{title}}</h1>
    <p>{{greetings()}}</p>
    <ninjastemplate></ninjastemplate>
    <app-content v-bind:ninjas="ninjasOb"> </app-content>
    <app-footer v-bind:status="statusString"></app-footer>
  </div>

</template>

<script>
import header from './components/header.vue'
import footer from './components/footer.vue'
import content from './components/content.vue'
import ninjas1 from './ninjas.vue'
export default {
  components:{
    'app-header' : header,
    'ninjastemplate' : ninjas1,
    'app-footer': footer,
    'app-content': content
  },
  data() {
    return {
      title: 'Welcome to Your Vue.js App',
      statusString: "live",
      ninjasOb : [
        {name: "john",speciality : 'doctor',show : false},
        {name: "nick",speciality : 'engineer',show : false},
        {name: "jack",speciality : 'buisemann',show: false}
      ]
    }
  },
  methods:{
   greetings: function(){
     return "whooooo!!!"
  },
  updateStatus: function($event){
    this.statusString = $event;
  }

  }
}
</script>


<style scoped>
h1 {
color: red
}
</style>
