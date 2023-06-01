const skinModule = {
    // 状态
    state: {
        // 当前皮肤样式
        currentSkin: "",
        // 当前可切换的皮肤列表
        skinList: []
    },
    mutations: {
        // 切换下一个皮肤
        changeToNextSkin(state: any) {
            // 获取可切换的皮肤列表的长度
            const listLength = state.skinList == null ? 0 : state.skinList.length;
            // 如果长度为空
            if (!listLength) {
                console.debug("可切换的皮肤列表为空，请考虑初始化皮肤列表");
                return;
            }
            // 获取下一个索引
            let nextSkinIndex = 0;
            // 如果有当前皮肤
            if (state.currentSkin) {
                // 寻找当前索引
                const currentSkinIndex =state.skinList.findIndex((skin: string) => skin == state.currentSkin);
                // 当前索引与数组长度比较
                if (currentSkinIndex + 1 < listLength) {
                    // 如果下一个索引长度不大于数组长度，则切换到下一个
                    nextSkinIndex = currentSkinIndex + 1;
                }
                // 当前皮肤类
                const replaceBeforeSkin =  state.currentSkin;
                // 设置当前的皮肤类
                state.currentSkin = state.skinList[nextSkinIndex];
                // 替代旧的皮肤类
                return document.body.classList.replace(replaceBeforeSkin, state.currentSkin);
            }
            if (!state.currentSkin) {
                // 设置当前的皮肤类
                state.currentSkin = state.skinList[nextSkinIndex];
                // 设置新的皮肤类
                return document.body.classList.add(state.currentSkin);
            }            
        },
        // 初始化皮肤列表
        initSkinList(state: any, skinList: Array<string>) {
            // 如果传入的皮肤列表不为空
            if (Array.isArray(skinList)) {
                state.skinList = skinList
            }
        },
        // 添加皮肤
        addSkin(state: any, skinName: string) {
            // 如果skinName不为空,添加到列表中
            if (skinName) {
                // 总是添加到末尾
                state.skinList.push(skinName);
            }
        },
        // 添加皮肤到body
        addClassToBody(state: any, skinName: string) {
            if (skinName) {
                document.body.classList.add(skinName);
            }
        },
        // 删除body的皮肤
        removeClassFromBody(state: any, skinName: string) {
            if (skinName) {
                document.body.classList.remove(skinName);
            }
        },
        // 删除皮肤功能
        destorySkinList(state: any) {
            // 删除当前皮肤
            if (state && state.currentSkin) {
                document.body.classList.remove(state.currentSkin);
            }
        }
    }
}

export default skinModule;