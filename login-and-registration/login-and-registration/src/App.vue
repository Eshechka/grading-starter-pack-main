<template>
  <div id="app">
      <Switcher>
      </Switcher>
  </div>
</template>

<script>
import Switcher from './components/Switcher.vue'

export default {
  name: 'App',
  components: {
    Switcher
  }

}
</script>

<style>
  #app {
    align-items: center;
    display: grid;
    height: 100vh;
    place-items: center;
    max-width: 758px;
    width: 100%;
  }
</style>
