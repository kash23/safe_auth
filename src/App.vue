<template>
  <TopNav></TopNav>
  <ContentBody></ContentBody>
</template>

<script>
import TopNav from './components/top-navbar.vue';

import ContentBody from './components/content-body.vue';

export default {
  name: 'App',
  components: {
    TopNav,

    ContentBody
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
  margin-top: 1px;
}
</style>
