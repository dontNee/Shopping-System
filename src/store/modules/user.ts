const userModule = {
    // 状态
    state: {
        // 当前用户
        currentUser: null
    },
    mutations: {
        // 登录
        signIn(state: any, user: any) {
            // 注册当前用户
            state.currentUser = user ? user : null;
        },
        // 退出
        signOut(state: any) {
            // 退出当前用户
            state.currentUser = null;
        }
    }
};

export default userModule;