<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: 'CodeClassModifyForm',
        props: {
            // 코드구릅 데이터
            codeClass: {
                type: Object,
                required: true
            }
        },
        data() {
            // 폼 입력요소에 바인딩할 데이터
            return {
                groupName: ""
            }
        },
        methods: {
            // 수정처리 이벤트 발생
            obSubmit() {
                
            }
        },
        created () {
            // 전달받은 codeClass 값을 바인딩 데이터에 대입
            this.groupName = this.codeClass.groupName
        },
    }
</script>

