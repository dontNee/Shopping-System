import ShoppingHome from './pages/ShoppingHome.vue';
import ShoppingDetail from './pages/ShoppingDetail.vue';

const routes: Array<any> = [
    {
        path: '/',
        redirect: '/shopping-home'
    },
    {
        path: '/shopping-home',
        component: ShoppingHome
    },
    {
        path: '/shopping-detail',
        component: ShoppingDetail
    },
    {
        path: '/shopping-login',
        component: () => import('./pages/ShoppingLogin.vue'),
        meta: {
            fullPage: true // 是否需要通用的页头和页脚
        }
    },
    {
        path: '/shopping-register',
        component: () => import('./pages/ShoppingRegister.vue'),
        meta: {
            fullPage: true // 是否需要通用的页头和页脚
        }
    }
];

export default routes;