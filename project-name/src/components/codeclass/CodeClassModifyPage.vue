<template>
    <div>

    </div>
</template>

<script>
import api from '@/api'
import CodeClassModifyForm from '@/components/codeclass/CodeClassModifyForm'
import {mapState, mapActions} from 'vuex'

export default {
    name: 'CodeClassModifyPage',
    components: {
        CodeClassModifyForm,
    },
    props: {
        // props 속성에 groupCode 정의
        groupCode: {
            type: String,
            required: true
        },
    },
    computed: {
        // 스토어상태 codeClass 등록
        ...mapState(['codeClass'])
    },
    created () {
        // 매핑된 함수 fetchCodeClass() 실행
        this.fetchCodeClass(this.groupCode)
    },
    methods: {
        // 스토어 액션함수 매핑
        ...mapActions(['fetchCodeClass']),
        // 코드구릅 수정 submit 이벤트를 처리할 메소드
        onSubmit(payload) {

        }
    },
}
</script>

