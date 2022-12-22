<template>
  <div style="margin-bottom: 30px;">
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-brand><router-link :class="{ 'menu-underline': true }" to="/">기쁨의교회</router-link></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/about">소감목록</b-nav-item>
          <b-nav-item to="/databinding/list">소감작성</b-nav-item>
          <b-nav-item to="/databinding/radio">전체소감목록</b-nav-item>
          <div><b-nav-text align="right">유태훈(요한팀3셀)</b-nav-text></div>
          <!-- <b-nav-item><router-link :class="{ 'menu-underline': true }" to="/about">About</router-link></b-nav-item>
          <b-nav-item><router-link :class="{ 'menu-underline': true }" to="/databinding/string">string</router-link></b-nav-item>
          <b-nav-item><router-link :class="{ 'menu-underline': true }" to="/databinding/html">html</router-link></b-nav-item>
          <b-nav-item><router-link :class="{ 'menu-underline': true }" to="/databinding/input">input</router-link></b-nav-item>
          <b-nav-item><router-link :class="{ 'menu-underline': true }" to="/databinding/select">select</router-link></b-nav-item>
          <b-nav-item><router-link :class="{ 'menu-underline': true }" to="/databinding/checkbox">checkbox</router-link></b-nav-item>
          <b-nav-item><router-link :class="{ 'menu-underline': true }" to="/databinding/radio">radio</router-link></b-nav-item>
          <b-nav-item><router-link :class="{ 'menu-underline': true }" to="/databinding/attribute">attribute</router-link></b-nav-item>
          <b-nav-item><router-link :class="{ 'menu-underline': true }" to="/databinding/list">list({{ print }})</router-link></b-nav-item>
          <b-nav-item><router-link :class="{ 'menu-underline': true }" to="/databinding/class">Class</router-link></b-nav-item>
          <b-nav-item><router-link :class="{ 'menu-underline': true }" to="/databinding/style">Style</router-link></b-nav-item>
          <b-nav-item><router-link :class="{ 'menu-underline': true }" to="/event/click">click</router-link></b-nav-item> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped>
.menu-underline {
  text-decoration: none;
  color: inherit;
}
</style>
