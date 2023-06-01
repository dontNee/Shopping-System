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
    }
];

export default routes;