import api from '@/api'

import {
    SET_ACCESS_TOKEN,
    SET_MY_INFO,
    DESTROY_ACCESS_TOKEN,
    DESTROY_MY_INFO
} from './mutation-types'

export default {
    signin({commit}, payload) {
        const params = {
            username: payload.userid,
            password: payload.password
        }
        const url = '/api/authentication?username=' + payload.userid + '&password=' + payload.password
        console.log(url)
        return api.get(url, params)
                    .then(res => {
                        console.log('res:' + JSON.stringify(res.data.username))
                        const accessToken = res.data.accessToken

                        commit(SET_ACCESS_TOKEN, accessToken)

                        return api.get('/users/myinfo')
                    })
                    .then(res => {
                        commit(SET_MY_INFO, res.data)
                    })
    },
    signinByToken({commit}, token) {
        commit(SET_ACCESS_TOKEN, token)
        return api.get('users/myinfo')
                    .then(res => {
                        commit(SET_MY_INFO, res.data)
                    })
    },
    signout({commit}) {
        commit(DESTROY_MY_INFO)
        commit(DESTROY_ACCESS_TOKEN)
        alert('로그우앗 되었습니다.')
    }
}