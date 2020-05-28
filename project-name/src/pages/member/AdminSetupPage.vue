<template>
    <div align="center">
        <h2>최초관리자등록</h2>

        <admin-setup-form @submit="onSubmit" />
    </div>
</template>

<script>
import api from '@/api'
import AdminSetupForm from '@/components/member/AdminSetupForm'

export default {
    name: 'AdminSetupPage',
    components: {
        AdminSetupForm
    },
    methods: {
        onSubmit(payload) {
            const {userId, userName, userPw} = payload;

            api.get('/users/setup', {userId, userName, userPw})
                .then(res => {
                    console.log("res:", res)

                    alert('등록되었습니다.')
                    this.$router.push({
                        name: 'Home'
                    })
                })
                .catch(err => {
                    console.log("error:", JSON.stringify(err))
                    alert('관리자 등록 중 오류가 발생했습니다.');
                })
        }
    }
}
</script>