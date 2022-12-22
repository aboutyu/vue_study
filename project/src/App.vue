<template>
  <NavigatorView />
  <router-view/>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import NavigatorView from './components/NavigatorView.vue'

export default {
  components: { NavigatorView },
  data() {
    return {
      selectedKey: ''
    }
  },
  setup() {},
  created() {
    console.log('App.vue mounted !!!')
    console.log(this.$route.query)

    const form = {
      encStr: this.$route.query.encStr,
      ip: this.$route.query.ip,
      sp: this.$route.query.sp
    }

    axios
      .post('https://sogam.joyful-c.or.kr/api/decodeM', form)
      .then(function (response) {
        console.log(response)
        // self.$router.push({ path: '/' })
        self.userId = response.data.userId
        self.userMemId = response.data.userMemId
        self.userCell = response.data.userCell
        self.userTeam = response.data.userTeam
        self.userName = response.data.userName
        console.log(self.userId)
        console.log(self.userMemId)
        console.log(self.userCell)
        console.log(self.userTeam)
        console.log(self.userName)

        // store에 저장.
        self.setStoreData1(response.data)
      })
      .catch(function (error) {
        console.log(error)
        self.setStoreForErr()
      })
  },
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
