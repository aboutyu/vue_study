import Vue from 'vue'
import Router from 'vue-router'

import {HomeRouters} from '@/router/home'
import {AuthRouters} from '@/router/auth'
import {MemberRouters} from '@/router/member'
import {CodeClassRouters} from '@/router/codeclass'

Vue.use(Router)

export default new Router({
  // 히스토리 모드 지정
  mode: 'history',


  routes: [
    ...HomeRouters,
    ...AuthRouters,
    ...MemberRouters,
    ...CodeClassRouters
  ]
})
