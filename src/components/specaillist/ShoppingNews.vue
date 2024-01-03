<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Api from '../../api/index'

// 挂载函数
onMounted(() => {
    // 初始化数据
    initData();
})

// logo
const logoInfo = ref({} as any);

// 新闻
const shoppingMessages = ref([] as Array<any>);

// othericons
const othericons = ref([] as Array<any>);

// 初始化数据
function initData() {
    // 参数
    let params = {};
    // 回调函数
    let callback = (result: any) => {
        // 获取Logo信息
        logoInfo.value = result.logoInfo;
        // 获取新闻
        shoppingMessages.value = result.news;
        // 其他icons
        othericons.value = result.othericons;
    };
    Api.getShoppingNews(params, callback);
}


// vuex
const store = useStore();
// vue-router
const router = useRouter();
// 获取当前用户
const user = computed(() => store.state.user.currentUser);
// 登录
function handleSignIn() {
    router.push("/shopping-login")
}
// 退出
function handleSignOut() {
    // 用户退出
    store.commit("signOut");
}
// 注册
function handleRegister() {
    router.push("/shopping-register")
}
</script>

<template>

    <div class="shopping-news">

        <div class="news-header">
            <div class="logo-info">
                <!-- 圆形按钮 -->
                <div class="div-logo">
                    <img :src="logoInfo.imgSrc" :alt="logoInfo.imgAlt" />
                </div>
                <div v-if="!user" class="div-logo-info">
                    <p>{{ logoInfo.helloword }}</p>
                    <p>
                        <el-button link class="btn-info" @click="handleSignIn">登录</el-button>
                        <span class="sperator"></span>
                        <el-button link class="btn-info" @click="handleRegister">注册</el-button>
                    </p>
                </div>
                <div v-else class="div-logo-info">
                    <p class="username">{{ `Hi， ${user.userName}` }}</p>
                    <p>
                        <el-button link class="btn-info" @click="handleSignOut">退出</el-button>
                    </p>
                </div>
            </div>

            <!-- 圆角按钮 -->
            <div class="circle-buttons">
                <el-button size="small" type="danger" round>新人福利</el-button>
                <el-button size="small" type="info" round>PLUS会员</el-button>
            </div>
        </div>

        <el-divider></el-divider>

        <div class="shopping-message">
            <!-- 消息头部  -->
            <div class="message-header">
                <span class="message-title">商城快报</span>

                <el-button link class="btn-info message-more">更多  ></el-button>
            </div>
            <!-- 消息体 -->
            <div class="message-body">
                <ul>
                    <li v-for="item in shoppingMessages">
                        <span class="message-level">{{ item.level }}</span>
                        <span class="message-content ellipsis-one-line">{{ item.content }}</span>
                    </li>
                </ul>
            </div>
        </div>

        <el-divider></el-divider>

        <div class="other-icons">
            <!-- 图标列表 -->
            <div v-for="item in othericons" class="shopping-icon">
                <div>
                    <img  :src="item.imgSrc" />
                </div>
                <div>{{ item.name }}</div>
            </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>
.shopping-news {

    padding: 10px;

    .btn-info {
        color: #333;
        font-size: 12px;
    }

    .logo-info {
        height: 40px;
        margin-bottom: 20px;
        font-size: 12px;

        > div {
            height: 100%;
            vertical-align: top;
            display: inline-block;
        }

        .div-logo {
            width: 40px;
            border-radius: 50%;
            border: 2px solid #fff;
            overflow: hidden;

            img {
                height: 100%;
            }
        }

        .div-logo-info {
            padding: 0 10px;

            .username {
                white-space: nowrap;
                max-width: 115px;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .sperator {
                display: inline-block;
                width: 1px;
                height: 12px;
                background-color: #333;
                margin: 0 5px;
                vertical-align: middle;
            }
        }
    }

    :deep(.el-divider--horizontal) {
        margin: 7px 0;
    }

    .shopping-message {

        height: 130px;

        .message-header {

            height: 24px;
            line-height: 24px;
            .message-title {
                font-weight: 700;
            }

            .message-more {
                padding: 0;
                height: 100%;
                font-size: 12px;
                float: right;
                color: #999;
            }

            &::after {
                clear: both;
            }
        }

        .message-body {

            ul {
                padding-inline-start: 0;
                font-size: 12px;
                list-style: none;

                li {
                    margin-top: 5px;
                    .message-level {
                        vertical-align: top;
                        display: inline-block;
                        color: #e1251b;
                        padding: 0 5px;
                        margin-right: 5px;
                        background-color: rgba(225,37,27,.08);
                    }

                    .message-content {
                        vertical-align: top;
                        display: inline-block;
                        width: 75%;
                    }
                }
            }
        }
    }

    .other-icons {

        font-size: 12px;
        text-align: center;

        .shopping-icon {
            display: inline-block;
            width: 30%;
            height: 55px;

            img {
                width: 50%;
            }
        }
    }
}
</style>