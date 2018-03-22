<template>
<div>
<h1>List of ninjas</h1>
  <ul>
  <li v-for="x in ninjas">{{x}}</li>
  </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ninjas:  ['yoshi','mario','john']
    }
  }
}
</script>
<style scoped>
h1 {
color: green
}
</style>
