import apiAxios from '../assets/utils/api-axios'
import shoppingListJsonData from '../assets/data/shopping-list.json'
import navListJsonData from '../assets/data/nav-list.json'
import shoppingCotegoriesJsonData from '../assets/data/shopping-cotegories.json'
import shoppingScrollJsonData from '../assets/data/shopping-scroll.json'
import specailItemsJsonData from '../assets/data/specail-items.json'
import shoppingNewsJsonData from '../assets/data/shopping-news.json'
import seckillListJsonData from '../assets/data/seckill-list.json'
import globalSkinJsonData from '../assets/data/global-skin.json'
import HeaderFormJsonData from '../assets/data/header-form.json'
import searchFormJsonData from '../assets/data/search-form.json'
import shoppingfootJsonData from '../assets/data/shopping-foot.json'
import shoppingcrumbJsonData from '../assets/data/shopping-crumb.json'
import picturezoomJsonData from '../assets/data/picture-zoom.json'
import shoppingFormJsonData from '../assets/data/shopping-form.json'
import chinaJsonData from '../assets/data/addr.json'
import pictureScrollJsonData from '../assets/data/picture-scroll.json'
import shoppingLoginJsonData from '../assets/data/shopping-login.json'
import AsideMenuJsonData from '../assets/data/aside-menu.json'
// 开发模式
const devMode: boolean = true;

export default {
    // 获取导航条列表
    getHeaderNavList(params: any, callback: (x: Array<any>) => void) {
        if (devMode) {

            const headerNavList: Array<any> = navListJsonData;

            return callback(headerNavList);
        }
        apiAxios.get('/HeaderNavList', params, callback);
    },

    // 获取商品分类列表
    getShoppingCotegories(params: any, callback: (x: Array<any>) => void) {

        if (devMode) {

            const shoppingCotegoriesList: Array<any> = shoppingCotegoriesJsonData;

            return callback(shoppingCotegoriesList);
        }
        apiAxios.get('/getShoppingCotegories', params, callback);
    },

    // 获取滚动商品列表
    getShoppingScroll(params: any, callback: (x: Array<any>) => void) {

        if (devMode) {

            const shoppingScrollList: Array<any> = shoppingScrollJsonData;

            return callback(shoppingScrollList);
        }
        apiAxios.get('/getShoppingScroll', params, callback)
    },

    // 获取特殊商品
    getSpecailItems(params: any, callback: (x: Array<any>) => void) {

        if (devMode) {

            const specailItems: Array<any> = specailItemsJsonData;

            return callback(specailItems);
        }
        apiAxios.get('/getSpecailItems', params, callback);
    },

    // 获取商城新闻列表
    getShoppingNews(params: any, callback: (x: any) => void) {

        if (devMode) {

            const shoppingNews: any = shoppingNewsJsonData;

            return callback(shoppingNews);
        }
        apiAxios.get('/getShoppingNews', params, callback);
    },

    // 获取秒杀列表
    getSeckillList(params: any, callback: (x: any) => void) {

        if (devMode) {

            const result: any = seckillListJsonData;

            return callback(result);
        }
        apiAxios.get('/getSeckillList', params, callback);
    },

    // 获取全局皮肤
    getGlobalSkinList(params: any, callback: (x: Array<any>) => void) {

        if (devMode) {

            const skinList = globalSkinJsonData;

            return callback(skinList);
        }
        apiAxios.get('getGlobalSkinList', params, callback);
    },

    // 获取头部表单
    getHeaderFormConfig(params: any, callback: (x: any) => void) {

        if (devMode) {

            const headerFormConfig = HeaderFormJsonData;

            return callback(headerFormConfig);
        }
        apiAxios.get('getHeaderFormConfig', params, callback);
    },

    // 获取查询表单配置
    getSearchFormConfig(params: any, callback: (x: any) => void) {

        if (devMode) {

            const searchFormConfig = searchFormJsonData;

            return callback(searchFormConfig);
        }
        apiAxios.get('getSearchFormConfig', params, callback);
    },

    // 获取页脚配置
    getShoppingFoot(params: any, callback: (x: any) => void) {
        
        if (devMode) {

            const shoppingfootConf = shoppingfootJsonData;

            return callback(shoppingfootConf);
        }
        apiAxios.get('/getShoppingFoot', params, callback);
    },

    // 获取详情导航栏
    getShoppingCrumbList(params: any, callback: (x: Array<any>) => void) {

        if (devMode) {

            const shoppingCrumbList = shoppingcrumbJsonData;

            return callback(shoppingCrumbList);
        }
        apiAxios.get('/getShoppingCrumbList', params, callback);
    },

    // 获取预览图片列表
    getPictureZoom(params: any, callback: (x: Array<any>) => void) {

        if (devMode) {

            const pictureZoomList = picturezoomJsonData;

            return callback(pictureZoomList);
        }
        apiAxios.get('/getPictureZoom', params, callback);
    },

    // 获取商品表单信息
    getShoppingForm(params: any, callback: (x: any) => void) {

        if (devMode) {

            const shoppingForm = shoppingFormJsonData;

            return callback(shoppingForm);
        }
        apiAxios.get('/getShoppingForm', params, callback);
    },

    // 获取图片滚动列表
    getPictureScrollList(params: any, callback: (x: any[]) => void) {
        
        if (devMode) {

            const pictureScrollList = pictureScrollJsonData;

            return callback(pictureScrollList);
        }
        apiAxios.get('/getPictureScrollList', params, callback);
    },

    // 获取省市区信息
    getChinaAddrInfo(params: any, callback: (x: Array<any>) => void) {

        const chinaData = chinaJsonData;

        return callback(chinaData);
    },

    // 获取登录页面配置
    getShoppingLoginConfig(params: any, callback: (x: any) => void) {

        const shoppingLoginConf = shoppingLoginJsonData;

        return callback(shoppingLoginConf);
    },

    // 用户登录
    doUserLogin(params: any, callback: (x: any) => void) {

        apiAxios.post("api/user/signin", params, callback, import.meta.env.DEV ? "43.138.104.32" : "");
    },

    // 用户注册
    doUserRegister(params: any, callback: (x: any) => void) {

        apiAxios.post("api/user/signup", params, callback, import.meta.env.DEV ? "43.138.104.32" : "");
    },

    // 获取商品列表
    getShoppingList(params: any, callback: (x: any) => void): void {

        if (devMode) {

            const shoppingList: any = shoppingListJsonData;

            // return callback(shoppingList);
        }
        apiAxios.get('/api/good/getAllGoods', params, callback, import.meta.env.DEV ? "43.138.104.32" : "");
    },

    // 获取侧边栏菜单
    getAsideMenu(params: any, callback: (x: any) => void) {

        if (devMode) {

            const asideMenuJsonData = AsideMenuJsonData;

            return callback(asideMenuJsonData);
        }
    },

    // 添加商品
    addGoods(params: any, callback: (x: any) => void) {

        apiAxios.post("api/good/uploadGoods", params, callback, import.meta.env.DEV ? "43.138.104.32" : "");
    },
    
    // 获取用户商品
    getGoodsByUser(params: any, callback: (x: any) => void) {

        apiAxios.get(`api/good/getGoodsByUser?userId=${params.userId}`, null, callback, import.meta.env.DEV ? "43.138.104.32" : "");
    }
}