<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'home',
  components: {
    Header,
    Footer
  }
}

</script>

<style lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
