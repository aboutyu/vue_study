<template>
  <div>
    <div :class="{ 'text-red': hasError }">클래스 바인딩</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      hasError: false
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

<style scoped>
.active {
  background-color: greenyellow;
  font-weight: bold;
}
.text-red {
  color: red;
}
</style>
