<template>
<div
  <ul>
    <li v-for ="x in ninjas" v-on:click="x.show= !x.show">
    <p>{{x.name}}</p>
    <p v-show=x.show>{{x.speciality}}</p>
    </li>
  </ul>
</div>
</template>
<script>
export default{
  props: {
    ninjas: {
      type: Array,
      required: true
    }
  },
  data(){
    return {

    }
  }
}
</script>
<style scoped>
ul{

}
  li{
    border: 1px solid black;
    padding: 50px;
    display: inline-block;
    margin: 10px;
    height: 100px;
  }
</style>
