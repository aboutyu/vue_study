import Home from '@/pages/Home';

import MainHeader from '@/components/common/MainHeader';
import Footer from '@/components/common/Footer';
import MenuBar from '@/components/common/MenuBar';

 
export const HomeRouters = [
    // 홈 라우터 설정
   {
       path: '/',
       name: 'Home',
       components: {
           header: MainHeader,
           menu: MenuBar,
           default: Home,
           footer: Footer
       }
   } 
]