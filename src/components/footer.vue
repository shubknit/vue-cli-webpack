<template>
<footer>
  <h3> {{title}}</h3>
  <p>{{status}}</p>
</footer>
</template>
<script>
export default{
  props:{
    status:{
      type: String
    }
  },
  data(){
    return {
    title : "Copyright vue js 2018"
    }
  }
}
</script>
<style scoped>
 footer {
 background: black;
 }
 h3{
  text-align: center;
  color: green;
 }
 p{
   color: #fff;
   text-align: center;
 }
</style>
