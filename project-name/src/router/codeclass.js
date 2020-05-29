import store from '@/store'
import MainHeader from '@/components/common/MainHeader'
import Footer from '@/components/common/Footer'
import MenuBar from '@/components/common/MenuBar'
import CodeClassListPage from '@/pages/codeclass/CodeClassListPage'
import CodeClassRegisterPage from '@/pages/codeclass/CodeClassRegisterPage'
import CodeClassModifyPage from '@/pages/codeclass/CodeClassModifyPage'
import CodeClassReadPage from '@/pages/codeclass/CodeClassReadPage';

export const CodeClassRouters = [
    // 목록화면 라우트 정의
    {
        path: '/codeclass',
        name: 'CodeClassListPage'
    },
    // 등록화면 라우트 정의
    {
        path: '/codeclass/register',
        name: 'CodeClassRegisterPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: CodeClassRegisterPage,
            footer: Footer
        },
        beforeEnter(to, from, next) {
            const {isAdmin} = store.getters
            if (!isAdmin) {
                alert('관리자 권한이 필요합니다.')
                next({name: 'Signin'})
            }
            next()
        },
    },
    // 상세보기화면 라우트 정의
    {
        path: '/codeclass/:groupCode',
        name: 'CodeClassReadPage'
    },
    // 수정화면 라우트 정의
    {
        path: '/codeclass/:groupCode/modify',
        name: 'CodeClassModifyPage'
    },

]