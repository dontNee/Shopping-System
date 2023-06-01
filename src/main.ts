import { createApp } from 'vue'
import './assets/main.css'

import App from './App.vue'

const app = createApp(App)

// 加载element-ui
import ElementPlus from 'element-plus'
// 加载element-ui css
import 'element-plus/dist/index.css'

app.use(ElementPlus);
// 创建路由
import  * as VueRouter from 'vue-router'
import routes from './router'

const router = VueRouter.createRouter({
    // hash模式
    history: VueRouter.createWebHashHistory(),
    // 路由
    routes: routes,
    // 页面跳转后的滚动
    scrollBehavior (to, from, savedPosition) {
      // 默认滚动到页面
      const result = {
        // app元素
        el: '#app',
        // 相对位置
        top: 0
      }
      if (to.path == "/shopping-detail") {
        // 选择搜索框底部的元素
        result.el = "#anchor-point";
      }
      // return 期望滚动到哪个的位置
      return result;
    }
})

app.use(router);

// 导入vuex
import store from "./store/index"

app.use(store);

// 注册图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')