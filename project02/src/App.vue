<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding/string">string</router-link> |
    <router-link to="/databinding/html">html</router-link> |
    <router-link to="/databinding/input">input</router-link> |
    <router-link to="/databinding/select">select</router-link> |
    <router-link to="/databinding/checkbox">checkbox</router-link> |
    <router-link to="/databinding/radio">radio</router-link> |
    <router-link to="/databinding/attribute">attribute</router-link> |
    <router-link to="/databinding/list">list({{ print }})</router-link> |
    <router-link to="/databinding/class">Class</router-link> |
    <router-link to="/databinding/style">Style</router-link> |
    <router-link to="/event/click">click</router-link>
  </nav>
  <router-view/>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {},
  data() {
    return {
      selectedKey: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
  conputed: {
    ...mapGetters({
      count: 'allUsers',
      print: 'printUserCount'
    })
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
