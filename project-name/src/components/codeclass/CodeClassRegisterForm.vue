<template>

    <form @submit.prevent="onSubmit">

        <table>
            <tr>
                <td>그룹코드</td>
                <td><input v-model="groupCode" type="text" /></td>
            </tr>
            <tr>
                <td>그룹코드명</td>
                <td><input v-model="groupName" type="text" /></td>
            </tr>
        </table>

        <div>
            <button type="submit">등록</button>
            <router-link :to="{name:'CodeClassListPAge'}">목록</router-link>
        </div>
    </form>
</template>

<script>
    export default {
        name: 'CodeClassRegisterForm',
        // 폼입력요소에 바인딩할 데이터
        data() {
            return {
                groupCode: "",
                groupName: ""
            }
        },
        methods: {
            // submit 이벤트 발생
            onSubmit() {
                const {groupCode, groupName} = this
                this.$emit('submit', {groupCode, groupName})
            }
        },
    }
</script>

<style scoped>

</style>