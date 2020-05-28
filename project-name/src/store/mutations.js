import {
    SET_ACCESS_TOKEN,
    SET_MY_INFO,
    DESTROY_ACCESS_TOKEN,
    DESTROY_MY_INFO,
    FETCH_CODECLASS_LIST,
    FETCH_CODECLASS,
} from './mutation-types'
import api from '@/api'
import Cookies from 'js-cookie'

export default {

    [SET_ACCESS_TOKEN](state, accessToken) {
        if (accessToken) {
            state.accessToken = accessToken
            api.defaults.headers.common.Authorization = 'Bearer ' + accessToken

            // 쿠키에 accessToken을 저장한다.
            Cookies.set('accessToken', accessToken, {
                expires: 1
            })
        }
    },
    [SET_MY_INFO](state, myinfo) {
        if (myinfo) {
            state.myinfo = myinfo
        }
    },
    [DESTROY_ACCESS_TOKEN](state) {
        state.accessToken = ""
        delete api.defaults.headers.common.Authorization
        Cookies.remove('accessToken')
    },
    [DESTROY_MY_INFO](state) {
        state.myinfo = null
    },
    [FETCH_CODECLASS_LIST](state, codeClasses) {
        state.codeClasses = codeClasses
    },
    [FETCH_CODECLASS](state, codeClass) {
        state.codeClass = codeClass
    },
}