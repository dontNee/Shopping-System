<script setup lang="ts">
import api from '@/api';
import { reactive, ref, inject } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus'

// 表单ref
const loginFormRef = ref();

// 表单模型
const formModel = reactive({
    userName: "",
    password: ""
});

// 表单校验
const formRules = reactive({
    // 用户名
    userName: [{
        validator: (rule: any, value: any, callback: any) => {
            if (!value) {
                callback(new Error("请输入用户名"));
                return;
            }
            callback();
        },
        trigger: 'blur'
    }],
    // 密码
    password: [{
        validator: (rule: any, value: any, callback: any) => {
            if (!value) {
                callback(new Error("请输入密码"));
                return;
            }
            callback();
        },
        trigger: 'blur'
    }]
});


// 通用属性
const common: any = inject("common");
// vuex
const store = useStore();
// 获取路由
const router = useRouter();
// 处理点击事件
function handleUserLogin(formEl: any) {
    // 表单校验
    formEl && formEl.validate((valid: any) => {
        if (valid) {
            // 登录参数
            let params = {
                userAccount: formModel.userName,
                userPassword: formModel.password
            };
            // 回调函数
            let callback = (result: any) => {
                // 成功
                if (result.statusCode == common.SUCCESS_CODE && result.responseVo) {
                    // 注册当前用户
                    store.commit('signIn', result.responseVo);
                    // 返回首页
                    router.push("/");
                }
                // 失败
                if (result.statusCode != common.SUCCESS_CODE || !result.responseVo) {
                    ElMessage("用户名和密码不匹配");
                }
            };
            // Api
            api.doUserLogin(params, callback);
        }
    })
}
// 用户注册
function handleRegister() {
    router.push("/shopping-register")
}
</script>

<template>
    <div class="form-container">
        <div class="form-header">
            <span>请注意您的个人隐私，本网站仅用于个人学习使用</span>
        </div>
        <el-form :model="formModel" class="login-form" :rules="formRules" ref="loginFormRef">
            <el-form-item class="login-form-header">
                <p>账户登录</p>
            </el-form-item>
            <el-form-item prop="userName">
                <el-input class="input-usr" v-model="formModel.userName">
                    <template #prepend>
                        <el-icon>
                            <User />
                        </el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input class="input-password" v-model="formModel.password">
                    <template #prepend>
                        <el-icon>
                            <Lock />
                        </el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item class="forget-password">
                <p>
                    <el-button link>忘记密码</el-button>
                </p>
            </el-form-item>
            <el-form-item>
                <el-button class="login-btn" @click="handleUserLogin(loginFormRef)">登录</el-button>
            </el-form-item>
        </el-form>
        <div class="form-footer">
            <div class="qq-weixin">
                <div class="qq">
                    <b class="qq-icon"></b>
                    <span>QQ</span>
                </div>
                <span class="divider">|</span>
                <div class="weixin">
                    <b class="weixin-icon"></b>
                    <span>微信</span>
                </div>
            </div>
            <div>
                <div class="signup" @click="handleRegister">
                    <b class="signup-icon"></b>
                    <span>立即注册</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.form-container {
    width: 346px;
    background-color: #fff;

    .form-header {
        padding: 10px 0;
        height: 38px;
        width: 100%;
        background-color: #fff8f0;
        text-align: center;

        span {
            font-size: 12px;
            color: #999;
            display: inline-block;
            vertical-align: top;
        }
    }

    .login-form {
        width: 100%;
        padding: 20px 20px 0;
        .login-form-header {
            height: 30px;
            margin-bottom: 35px;

            p {
                width: 100%;
                text-align: center;
                font-size: 18px;
                font-weight: 700;
                color: #666;
                padding: 0 0 15px;
                border-bottom: 1px solid #f4f4f4;
                cursor: default;

                &:hover {
                    color: #e4393c;
                }

            }
        }

        .forget-password {

            p {
                width: 100%;
                text-align: right;

                .el-button {
                    font-size: 12px;
                    color: #666;
                }
            }
        }

        .input-usr,
        .input-password {
            height: 38px;
        }

        .login-btn {
            width: 100%;
            color: #fff;
            font-weight: 700;
            background: #e4393c;
            border-radius: 0;
        }
    }

    .form-footer {
        width: 100%;
        height: 50px;
        padding: 0 20px;
        background-color: #fcfcfc;
        display: flex;
        justify-content: space-between;

        .divider {
            color: #666;
            margin: 0 10px;
        }

        .qq, .weixin {
            display: inline-block;
            position: relative;
            width: 45px;
            padding-left: 20px;
            font-size: 12px;
            color: #666;
            text-align: right;
        }

        .qq-icon, .weixin-icon {
            display: block;
            width: 19px;
            height: 18px;
            background: url("http://43.138.104.32/global-assets/img/vue/jd-shopping/QQ-weixin.png");
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }

        .qq-icon {
            background-position: 0 0;
        }

        .weixin-icon {
            background-position: -20px 0;
        }

        .signup {
            color: #b61d1d;
            font-size: 14px;
            padding-left: 20px;
            display: inline-block;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
            }

            .signup-icon {
                display: inline-block;
                width: 16px;
                height: 16px;
                margin-right: 5px;
                background: url("http://43.138.104.32/global-assets/img/vue/jd-shopping/pwd-icons-new.png") -104px -75px no-repeat;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
}
</style>