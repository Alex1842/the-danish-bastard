<template>
  <div id="app">
    <Deck />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Deck from './components/VDeck.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Deck
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
