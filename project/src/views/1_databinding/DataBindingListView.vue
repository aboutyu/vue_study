<template>
  <div>
    <div>
      <select v-model='selectedKey' @change='print($event)'>
        <option :key='city.code' :value='city.code' v-for='city in $store.state.cities'>
          {{ city.title }}
        </option>
      </select>
    </div>
    <div>
      {{ $store.getters.printUserCount }}
      <p>모든 유저수: {{ count }} <button @click="addUser">추가</button></p>
      <table>
        <thead>
          <tr>
            <td>유저ID</td>
            <td>이름</td>
            <td>전화번호</td>
            <td>이메일</td>
            <td>URL</td>
            <td>주문수량</td>
            <td>주문개수</td>
            <td>금액</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, i) in users" :key="i">
            <td>{{user.userId}}</td>
            <td>{{user.firstName}} {{user.lastName}}</td>
            <td>{{user.phoneNumber}}</td>
            <td>{{user.emailAddress}}</td>
            <td>{{user.homepage}}</td>
            <td>{{user.price}}</td>
            <td><input type="number" v-model="user.count" /></td>
            <td>{{user.price * user.count}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

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
  methods: {
    // ...mapMutations(['addUsers']),
    ...mapActions(['addUsersInActions']),
    print(event) {
      console.log('선택한 값:', event.target.value)
    },
    addUser() {
      const data = {
        userId: this.count + 1,
        firstName: 'BBBB',
        lastName: 'h5jdd',
        phoneNumber: '123456',
        homepage: 'https://amogg.tistory.com/2',
        price: 1200,
        count: 1
      }
      // this.addUsers(data)
      // this.$store.commit('addUsers', data)

      this.$store.dispatch('addUsersInActions', data)
      this.addUsersInActions(data)
    }
  },
  computed: {
    ...mapGetters({
      count: 'allUsers',
      print: 'printUserCount'
    }),
    ...mapState(['users'])
  }
}
</script>
