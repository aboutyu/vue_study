<template>
    <div align="center">
        <h1>Image Shop에 오신 것을 환영합니다.</h1>
        <p>{{getTime()}}</p>
    </div>
</template>

<script>
export default {
    // 컴포넌트 이름
    name: 'Home',

    // Method 속성
    methods: {
        getTime() {
            return new Date().toString();
        }
    }
}
</script>