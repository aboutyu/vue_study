<template>
  <div>
    <div>
      <input type="radio" id="html" value="html" v-model="favoriteLang">
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="radio" id="css" value="css" v-model="favoriteLang">
      <label for="css">CSS</label>
    </div>
    <div>
      <input type="radio" id="js" value="js" v-model="favoriteLang">
      <label for="js">JavaScript</label>
    </div>
    <div>선택한 지역: {{ favoriteLang }}</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      favoriteLang: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
