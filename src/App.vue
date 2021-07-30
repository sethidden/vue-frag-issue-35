<template>
  <div id="app">
    <MyFrag/>
    <div id="ok">
      On the other hand - I'm visible to selenium because I'm outside v-frag
    </div>
  </div>
</template>

<script>
import MyFrag from './components/MyFrag.vue'

export default {
  name: 'App',
  components: {
    MyFrag
  },
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
