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
    routes: routes
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