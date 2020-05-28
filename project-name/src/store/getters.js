

export default {

    // 로그인 여부를 확인한다.
    isAuthorized(state) {
        return state.accessToken.length > 0 && !!state.myinfo
    },
    isAdmin(state, getters) {
        return getters.isAuthorized && state.myinfo.authList[0].auth === 'ROLE_MEMBER'
    }
}