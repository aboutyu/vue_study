<template>
    <div>

    </div>
</template>

<script>
import api from '@/api'
import CodeClassRead from '@/components/codeclass/CodeClassRead'
import {mapState, mapActions} from 'vuex'

export default {
    name: 'CodeClassReadPage',
    components: {
        CodeClassRead
    },
    props: {
        // props 속성에 넘겨받는 값 groupCode 정의
        groupCode: {
            type: String,
            required: true
        },
    },
    computed: {
        // 스토어 상태를 computed 속성으로 등록
        ...mapState(['codeClass'])
    },
    created () {
        // 매핑된 함수 fetchCodeClass() 실행
        this.fetchCodeClass(this.groupCode)
    },
    methods: {
        // 코드구릅 삭제 메서드
        onDelete() {
            
        },
        // 스토어 액션을 methods 속성으로 등록
        ...mapActions(['fetchCodeClass'])
    },

}
</script>

