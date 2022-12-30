<template>

  <div class="black-bg" v-if="isModal">
    <div class="white-bg">
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
      <button @click="isModal = false">닫기</button>
    </div>
  </div>


  <img alt="Vue logo" src="./assets/logo.png">
  <div v-for="data, i in list" :key="data">
    <img :src="data.img" alt="">
    <h4 @click="isModal = true">{{ data.area }} 원롬</h4>
    <p>{{ data.price }}만원</p>
    <button @click="increase(i)">신고</button>
    <span>신고수: {{ data.notify }}</span>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isModal: false,
      list: [
        {
          img: 'https://mblogthumb-phinf.pstatic.net/MjAxNzAzMDVfMTI1/MDAxNDg4NzE3NTMzNzk2.WZFN5Kz4KKRTNQgpZb6qND3Uhh4IPktoyPQ2ZHgRjhog.ySVna8EEnk9MP4-my95KdOJ_DxIYC_lFEY7935yg7Zkg.JPEG.threenitro/%EC%8B%A0%EC%B6%95%EB%B0%A9_%281%29.JPG?type=w800',
          area: '역삼동', 
          price: 60, 
          notify: 0
        }, 
        {
          img: 'https://mblogthumb-phinf.pstatic.net/MjAxNzAzMDVfMTMg/MDAxNDg4NzE3NjEzNDQ4.gqUa7MyGUixq1ZAtnyts-lcGZMN8KdrrUWSyrdl9Busg.SI8yu0bYn2UUqERcj2NcnV3vHsrtUO5rOCivrl39Y8kg.JPEG.threenitro/%EC%8B%A0%EC%B6%95%EB%B0%A9_%285%29.JPG?type=w800',
          area: '천호동', 
          price: 70, 
          notify: 0
        }, 
        {
          img: 'https://mblogthumb-phinf.pstatic.net/MjAxNzAzMDVfMTE2/MDAxNDg4NzE3NjY0MTU4.s3rEC5d6ItnLU5fEEjP1P4dCXZ2Z58v28MyGx72gPKEg.c97M2KIEKPrgUND09SjBOilyIntDSOkq_lX4QVRLjj4g.JPEG.threenitro/%EC%8B%A0%EC%B6%95%EB%B0%A9_%289%29.JPG?type=w800',
          area: '분당동', 
          price: 80, 
          notify: 0
        }],
    }
  },
  methods: {
    increase(number) {
      this.list[number].notify ++
    }
  },
  components: {
    
  }
}
</script>

<style>
body {
  margin: 0
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.room-img {
  width: 100px;
  height: 100px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
