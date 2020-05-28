<template>
    <div>

    </div>
</template>

<script>
import CodeClassList from '@/components/codeclass/CodeClassList'
import {mapState, mapActions} from 'vuex'

export default {
    name: 'CodeClassListPage',
    components: {
        CodeClassList
    },
    computed: {
        // 스토어상태를 computed 속성으로 등록
        ...mapState(['codeClasses'])
    },
    mounted () {
        // 매핑된 함수 fetchCodeClassList() 실행
        this.fetchCodeClassList()
    },
    methods: {
        // 스토어 액션을 methods 속성으로 등록
        ...mapActions(['fetchCodeClassList'])
    },
}
</script>
