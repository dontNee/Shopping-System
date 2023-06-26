<script setup lang="ts">
import api from '@/api';
import { inject, reactive, ref } from 'vue';
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';

// 表单模型
const formModel = reactive({
    // 用户账号
    userAccount: "",
    // 用户密码
    userPassword: "",
    // 联系方式
    userContact: "",
    // 用户名
    userName: ""
});
// 规则
const formRules = reactive({
    // 账户
    userAccount: [
        {
            validator: (rule: any, value: any, callback: any) => {
                if (!value) {
                    callback(new Error("请输入你的账户"));
                    return;
                }
                callback();
            },
            trigger: 'blur'
        }
    ],
    // 密码
    userPassword: [
        {
            validator: (rule: any, value: any, callback: any) => {
                if (!value) {
                    callback(new Error("请输入密码"));
                    return;
                }
                callback();
            },
            trigger: 'blur'
        }
    ]
});

// 获取表单
const registerForm: any = ref();
// 通用属性
const common: any = inject("common");
// 路由
const router = useRouter();
// 处理用户注册
function handleRegister(formEl: any) {
    // 手动校验
    formEl && formEl.validate((valid: any) => {
        if (valid) {
            // 参数
            let params = {
                ...formModel
            };
            // 回调
            let callback = (result: any) => {
                // 成功
                if (result.statusCode == common.SUCCESS_CODE) {
                    ElMessage("恭喜，注册成功");
                    // 返回登录页
                    router.push("/shopping-login");
                }
                // 失败
                if (result.statusCode != common.SUCCESS_CODE) {
                    ElMessage("该账户已经存在");
                }
            };
            // Api
            api.doUserRegister(params, callback)
        }
    })
}

</script>

<template>
    <el-form class="register-form" :model="formModel" :rules="formRules" ref="registerForm">
        <!-- 账户 -->
        <el-form-item prop="userAccount">
            <el-input size="large" v-model="formModel.userAccount">
                <template #prepend>
                    <div class="prepend-label">{{ "账 户" }}</div>
                </template>
            </el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="userPassword">
            <el-input size="large" v-model="formModel.userPassword">
                <template #prepend>
                    <div class="prepend-label">{{ "密 码" }}</div>
                </template>
            </el-input>
        </el-form-item>
        <!-- 昵称 -->
        <el-form-item>
            <el-input size="large" v-model="formModel.userName">
                <template #prepend>
                    <div class="prepend-label">{{ "昵 称" }}</div>
                </template>
            </el-input>
        </el-form-item>
        <!-- 联系方式 -->
        <el-form-item>
            <el-input size="large" v-model="formModel.userContact">
                <template #prepend>
                    <div class="prepend-label">{{ "联 系 方 式" }}</div>
                </template>
            </el-input>
        </el-form-item>
        <!-- 注册 -->
        <el-form-item>
            <el-button class="btn-register" @click="handleRegister(registerForm)">{{ "注 册" }}</el-button>
        </el-form-item>
    </el-form>
</template>

<style lang="scss" scoped>
.register-form {
    width: 560px;
    margin: 0 auto;

    .prepend-label {
        width: 110px;
        text-align: center;
    }

    .btn-register {
        width: 100%;
        background-color: #e2231a;
        color: #fff;
        font-size: 18px;
        font-weight: 700;
        height: 45px;
    }
}
</style>