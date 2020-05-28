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
        name: 'CodeClassRegisterPage'
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