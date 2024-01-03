<script setup lang="ts">
import RegisterForm from '../components/RegisterForm.vue';
import Api from "../api/index";
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

// 底部菜单列表
const footerList = ref([] as Array<string>);
// 版权描述
const description = ref("");
// 挂载函数
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
function backHome() {
    // 返回首页
    router.push("/");
}
</script>

<template>
    <el-container direction="vertical" class="shopping-register">

        <el-header height="110px">
            <div class="logo" @click="backHome">
                <img src="http://43.138.104.32/global-assets/img/vue/jd-shopping/shopping_logo_7.jpeg" />
                <span class="title">{{ "欢迎注册" }}</span>
            </div>
        </el-header>

        <el-main>
            <RegisterForm />
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
.shopping-register {
    width: 100%;
    min-width: 1210px;

    .el-header {
        border-bottom: 1px solid #f2f2f2;
        box-shadow: 0 3px 3px 1px #f2f2f2;

        .logo {
            position: absolute;
            top: 100%;
            transform: translateY(-100%);
            left: 15%;
            cursor: pointer;

            img {
                height: 100px;
            }

            .title {
                display: inline-block;
                margin: 15px 0 0 15px;
                font-size: 24px;
                vertical-align: top;
            }
        }
    }

    .el-main {
        padding-top: 15vh;
        padding-bottom: 10vh;
        border-bottom: 1px solid #f2f2f2;
    }


    .el-footer {
        font-size: 12px;
        padding-top: 35px;

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