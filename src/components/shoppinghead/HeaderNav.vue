<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Api from '../../api/index'
import { ElMessage } from 'element-plus';

// 导航条数据
const navList = ref([] as Array<any>);
// 访问vuex
const store = useStore();

// 挂载方法
onMounted(() => {
    initData();
})
// 初始化页面数据
function initData() {
    // 获取导航栏列表
    getHeaderNavList();
    // 初始化皮肤
    initSkin();
}
// 获取导航栏列表
function getHeaderNavList() {
    // 参数
    let params = {};
    // 回调函数
    let callback = (resultList: Array<any>) => {
        // 赋值到响应数据
        navList.value = resultList;
    };
    Api.getHeaderNavList(params, callback);
}
// 初始化项目皮肤
function initSkin() {
    // 参数
    let params = {};
    // 回调函数
    let callback = (resultList: Array<string>) => {
        // 初始化皮肤列表
        store.commit("initSkinList", resultList);
    };
    Api.getGlobalSkinList(params, callback);
}

// 路由导航
const router = useRouter();
// 事件名称与函数映射
const eventsHandlerMap: any = {
    // 切换皮肤
    changeSkin: () => {
        store.commit("changeToNextSkin")
    },
    // 返回首页
    backHome: () => {
        router.push('/shopping-home')
    },
    // 跳转登录
    toLogin: () => {
        router.push('/shopping-login')
    },
    // 用户主页
    toUserPage: (item: any) => {
        if (!userName.value) {
            return ElMessage.warning("您好，请先登录");
        }
        router.push(item.route)
    }
}
// 处理点击操作
function handleClickEvents(item: any) {
    if (item && item.click) {
        // 处理点击事件
        Reflect.apply(eventsHandlerMap[item.click], undefined, [item]);
    }
}

// 获取当前用户
const userName = computed(() => store.state.user.currentUser ? store.state.user.currentUser.userName : "");
</script>

<template>
    <div class="header-nav">
        <ul class="nav-list">
            <li>
                <el-button link v-if="userName">
                    {{ userName }}
                </el-button>
                <el-button link v-else @click="handleClickEvents({click: 'toLogin'})">
                    {{ "你好，请登录" }}
                </el-button>
            </li>
            <li v-for="item in navList">
                <el-button link @click="handleClickEvents(item)">{{ item.navLabel }}</el-button>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.header-nav {

    color: #999;
    height: 30px;
    line-height: 30px;
    .nav-list {

        display: flex;
        justify-content: flex-end;

        li {
            display: inline-block;

            :deep(.el-button) {
                font-size: 12px;
                padding: 0 7px;
            }

            + li {

                :deep(.el-button) {
                    border-radius: 0;
                    border-left: 1px solid #999;
                }
            }
        }
    }
}
</style>