<template>
  <div>
    <div>
      <h1>클릭 이벤트</h1>
      <button @click="increaseCounter">Add1</button>
      <p>{{ counter }}</p>
    </div>
    <div>
      <h1>변경 이벤트</h1>
      <select v-model="selectedCity">
        <option value="">==선택해주세요==</option>
        <option v-for="(city, i) in cities" :value="city.code" :key="i">{{ city.title }}</option>
    </select>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      counter: 0,
      cities: [
        { title: '서울', code: '02' },
        { title: '부산', code: '051' },
        { title: '제주', code: '064' }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    increaseCounter() {
      this.counter += 1
    }
  }
}
</script>
