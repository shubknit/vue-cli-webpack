<template>
<header>
  <h1>{{title}}</h1>
  <p v-on:click="changeStatus">{{status}}</p>
</header>
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
      title: "Vue js header"
    }
  },
  methods:{
    changeStatus: function(){
      this.$emit('changeStatusEvent','live updated');
    }
  }
}
</script>
<style scoped>
  header {
    background: lightgreen;
  }
  h1,p {
  text-align: center;
  }

</style>
