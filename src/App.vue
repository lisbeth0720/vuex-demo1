<template>
   <div>
      <my-addition></my-addition>
      <p>--------------------------</p>
      <my-subtration></my-subtration>
   </div>
</template>

<script>
import Addition from './components/Addition.vue'
import Subtraction from './components/Subtraction.vue'

export default {
  name: 'App',
  components: {
    //起别名
    "my-addition":Addition,
    "my-subtration":Subtraction
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
