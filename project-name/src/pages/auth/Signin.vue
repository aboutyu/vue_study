<template>
    <div align="center">
        <h2>로그인</h2>

        <signin-form @submit="onSubmit" />
    </div>
</template>

<script>
import SigninForm from '@/components/auth/SigninForm';
import {mapActions} from 'vuex'

export default {
    name: 'Signin',
    components: { 
        SigninForm 
    },
    methods: {
        onSubmit(payload) {
            this.signin(payload).then(res => {
                alert('로그인 되었습니다.')
                this.$router.push({
                    name: 'Home'
                })
            })
            .catch(err => {
                console.log(JSON.stringify(err))
                alert('로그인 중 오류가 발생했습니다.')
            })
        },
        ...mapActions(['signin'])
    },
}
</script>