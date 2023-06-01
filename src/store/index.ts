import { createStore } from "vuex";
// 皮肤模块
import skinModule from "./modules/skin";

export default createStore({
    // 模块
    modules: {
        // 皮肤
        skin: skinModule
    }
});