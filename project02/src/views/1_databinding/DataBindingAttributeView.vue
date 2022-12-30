<template>
  <div>
    <input type="text" v-model="userId" />
    <button :disabled="userId === ''">조회</button>
    <br />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userId: 'yutaehun'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
