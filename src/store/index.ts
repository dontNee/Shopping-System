import { createStore } from "vuex";
// 皮肤模块
import skinModule from "./modules/skin";
// 用户模块
import userModule from './modules/user';

export default createStore({
    // 模块
    modules: {
        // 皮肤
        skin: skinModule,
        // 用户
        user: userModule
    }
});