<template>
  <div>
    <div>
      <input type="checkbox" id="html" value="html" v-model="favoriteLang">
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="checkbox" id="css" value="css" v-model="favoriteLang">
      <label for="css">CSS</label>
    </div>
    <div>
      <input type="checkbox" id="js" value="js" v-model="favoriteLang">
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
      favoriteLang: ['js']
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
