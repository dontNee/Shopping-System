<script setup lang="ts">
import { useRouter } from "vue-router";
import Api from "../api/index";
import LoginForm from "../components/LoginForm.vue";
import { onMounted, ref } from "vue";

// 底部菜单列表
const footerList = ref([] as Array<string>);

// 版权描述
const description = ref("");
onMounted(() => {
    // 初始化数据
    initData();
});
// 初始化数据
function initData() {
    // 参数
    let params = {};
    // 回调
    let callback = (result: any) => {
        // 底部链接列表
        footerList.value = result.footerList;
        // 描述
        description.value = result.description;
    }
    // 获取登录配置
    Api.getShoppingLoginConfig(params, callback);
}

// 路由
const router = useRouter();
// 返回首页
function handleBackHome() {
    // 返回
    router.push("/");
}
</script>

<template>
    <el-container direction="vertical" class="shopping-login">
        
        <el-header height="110px">
            <div class="logo" @click="handleBackHome">
                <img class="logo-img" src="http://43.138.104.32/global-assets/img/vue/jd-shopping/shopping_logo_7.jpeg" />
                <img src="http://43.138.104.32/global-assets/img/vue/jd-shopping/l-icon.png" />
            </div>
        </el-header>

        <el-main>
            <div class="login-content">
                <LoginForm class="form-position" />
            </div>
        </el-main>

        <el-footer>
            <ul>
                <li v-for="item in footerList">
                    <a href="#">{{ item }}</a>
                </li>
            </ul>
            <p>{{ description }}</p>
        </el-footer>

    </el-container>
</template>

<style lang="scss" scoped>
.shopping-login {
    width: 100%;
    height: 100%;
    min-width: 1210px;

    .logo {
        position: absolute;
        top: 100%;
        left: 15%;
        transform: translateY(-100%);
        cursor: pointer;

        img {
            margin: 0 5px;
            height: 60px;

            &.logo-img {
                height: 100px;
            }
        }
    }

    .el-main {
        background: #e93854;
        padding-top: 0;
        padding-bottom: 0;

        .login-content {
            position: relative;
            width: 990px;
            height: 475px;
            margin: 0 auto;
            background-image: url("http://43.138.104.32/global-assets/img/vue/jd-shopping/background.png");
            background-repeat: no-repeat;
            background-size: 100%;

            .form-position {
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }

    .el-footer {
        font-size: 12px;
        padding-top: 10px;

        ul {
            list-style: none;
            padding-inline-start: 0;
            text-align: center;

            li {
                display: inline-block;
                padding: 0 15px;
                

                a {
                    color: #666;
                    text-decoration: none;
                    cursor: pointer;

                    &:hover {
                        color: #E4393C;
                        text-decoration: underline;
                    }
                }

                + li {

                    &::before {
                        content: "|";
                        position: relative;
                        right: 15px;
                        color: #666;
                    }

                }
            }
        }

        p {
            color: #666;
            margin-top: 8px;
            text-align: center;
        }
    }
}
</style>