import Vue from 'vue'
import App from './App'
import router from './router'
import Cookies from 'js-cookie'

// 스토어 임포트
import store from './store'

Vue.config.productionTip = false

function init() {
  const savedToken = Cookies.get('accessToken')
  // Cookies.set('accessToken', 'dddrrr', {
  //   expires: 1
  // })

  if (savedToken) {
    return store.dispatch('signinByToken', savedToken)
  } else {
    return Promise.resolve()
  }
}

init().then(() => {
  new Vue({
    el: '#app',
  
    // 라우터를 옵션으로 등록
    router,
  
    // store를 옵션으로 등록
    store,
    
    components: { App },
    template: '<App/>'
  })
})
