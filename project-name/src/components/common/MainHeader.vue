<template>
    <div align="right">

        <div v-if="isAuthorized">
            <span>{{myinfo.userName}}님 환영합니다.</span>

            <button @click="onClickSignout">로그아웃</button>
        </div>
        <div v-else>
            <router-link :to="{name: 'Signin'}">로그인</router-link>
        </div>

    </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
    menu: 'MainHeader',

    methods: {
        onClickSignout() {
            this.signout()
            this.$router.push({name: 'Home'})
        }
    },

    // 스토어 상태와 getter를 computed 속성으로 등록
    computed: {
        ...mapState(['myinfo']),
        ...mapGetters(['isAuthorized', 'isAdmin']),
        ...mapActions(['signout'])
    }
}
</script>