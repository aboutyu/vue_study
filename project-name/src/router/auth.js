import HomeHeader from '@/components/common/HomeHeader';
import Footer from '@/components/common/Footer';
import Signin from '@/pages/auth/Signin';

export const AuthRouters = [
    // 로그인 화면 라우터 설정
    {
        path: '/auth/signin',
        name: 'Signin',
        components: {
            header: HomeHeader,
            default: Signin,
            footer: Footer
        }
    }
]
