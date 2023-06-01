<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import Api from '../../api/index'

// 挂载函数
onMounted(() => {
    initData();
})

// 定义响应数据
const shoppingCrumbList = ref([] as Array<any>);

// 初始化数据
function initData() {
    // 参数
    let params = {};
    // 回调函数
    let callback = (resultList: Array<any>) => {
        shoppingCrumbList.value = resultList;
    };
    Api.getShoppingCrumbList(params, callback);
}
</script>

<template>
    <div class="shopping-crumb">
        <!-- 面包屑导航 -->
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item v-for="item in shoppingCrumbList">
                <span>{{ item.name }}</span>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<style lang="scss" scoped>
.shopping-crumb {

    display: inline-block;
    
    :deep(.el-breadcrumb__item) {
        font-size: 12px;
        max-width: 140px;

        span {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
</style>