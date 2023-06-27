<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import HeaderNav from '../components/shoppinghead/HeaderNav.vue';
import AsideMenu from '../components/shoppinguser/AsideMenu.vue';
// 内容标题
const bodyTitle = ref("我的店铺");
// 侧边栏点击
function handleAsideMenuClick(item: any) {
    bodyTitle.value = item;
}
// 挂载函数
onMounted(() => {
    // 初始化标题
    initBodyTitle();
})

const route = useRoute();
// 初始化标题
function initBodyTitle() {
    // 当前路由
    const currentPath = route.fullPath;
    // 我的订单
    if (currentPath && currentPath.indexOf("my-order") > -1) {
        bodyTitle.value = "我的订单";
    }
}
</script>

<template>
    <el-container direction="vertical" class="shopping-user">

        <el-header height="auto">
            <div class="shopping-content-container">
                <!-- 顶部导航条 -->
                <HeaderNav></HeaderNav>
            </div>
        </el-header>

        <!-- 用户首页导航条 -->
        <div class="user-header-nav">
            <!-- 导航条内容 -->
            <div class="shopping-content-container">
                <img src="http://43.138.104.32/global-assets/img/vue/jd-shopping/logo_2017.png" />
            </div>
        </div>

        <el-container>
            <!-- 侧边栏 -->
            <el-aside width="300px">
                <AsideMenu @router-change="handleAsideMenuClick"></AsideMenu>
            </el-aside>
            <!-- 主体 -->
            <el-main>
                <div class="content">
                    <div class="body-title">
                        <span>{{ bodyTitle }}</span>
                    </div>
                    <RouterView></RouterView>
                </div>
            </el-main>
        </el-container>

    </el-container>
</template>

<style lang="scss" scoped>
.shopping-user {
    background-color: #f5f5f5;
    min-height: 750px;

    .user-header-nav {
        width: 100%;
        height: 80px;
        background-color: #e2231a;
    }

    .el-aside {
        padding-top: 20px;
    }

    .el-main {

        .content {
            max-width: 1068px;
        }
        
        .body-title {
            height: 65px;
            line-height: 65px;
            background-color: #fff;
            padding-left: 25px;
            font-size: 12px;
            margin-bottom: 15px;
            
            span {
                font-weight: bold;
            }
        }
    }
}
</style>