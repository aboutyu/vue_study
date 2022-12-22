import { createStore } from 'vuex'

export default createStore({
  state: {
    login: {
      userName: '테스터',
      userId: 'munsj',
      userMemId: '153',
      userCell: '3셀',
      userTeam: '요한'
    },
    cities: [
      { title: '서울', code: '02' },
      { title: '부산', code: '051' },
      { title: '제주', code: '064' }
    ],
    users: [
      {
        userId: 1,
        firstName: 'AAAAA',
        lastName: 'as23',
        phoneNumber: '123456',
        emailAddress: 'AAAAA@test.com',
        homepage: 'https://amogg.tistory.com/1',
        price: 1200,
        count: 1
      },
      {
        userId: 2,
        firstName: 'BBBB',
        lastName: 'h5jdd',
        phoneNumber: '123456',
        homepage: 'https://amogg.tistory.com/2',
        price: 1200,
        count: 1
      },
      {
        userId: 3,
        firstName: 'CCCCC',
        lastName: '2dhbs',
        phoneNumber: '33333333',
        homepage: 'https://amogg.tistory.com/3',
        price: 1200,
        count: 1
      },
      {
        userId: 4,
        firstName: 'DDDDD',
        lastName: 'bacasd',
        phoneNumber: '222222222',
        homepage: 'https://amogg.tistory.com/4',
        price: 1200,
        count: 1
      },
      {
        userId: 5,
        firstName: 'EEEEE',
        lastName: 'asdfasdf',
        phoneNumber: '111111111',
        homepage: 'https://amogg.tistory.com/5',
        price: 1200,
        count: 1
      }
    ]
  },
  getters: {
    allUsers(state) {
      return state.users.length
    },
    printUserCount(state, getters) {
      const count = getters.allUsers
      return '숫자는 ' + count + '입니다.'
    }
  },
  mutations: {
    addUsers(state, payload) {
      state.users.push(payload)
    },
    isLoginUser(state) {
      return (state.login.userId !== '')
    }
  },
  actions: {
    addUsersInActions({ commit }, payload) {
      commit('addUsers', payload)
    },
    login({ commit }, payload) {
      return commit('isLoginUser')
    },
    isLogin({ commit }) {
      return commit('isLoginUser')
    }
  },
  modules: {
  }
})
