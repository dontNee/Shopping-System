<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Api from '../../api/index'

// 挂载函数
onMounted(() => {
    // 初始化数据
    initData();
});

// 回调函数
const ShoppingScrollItems = ref([] as Array<any>);

// 初始化函数
function initData() {
    // 参数
    let params = {};
    // 回调函数
    let callback = (resultList: Array<any>) => {
        // 返回参数
        ShoppingScrollItems.value = resultList;
    };
    Api.getShoppingScroll(params, callback);
}

</script>

<template>
    <!-- 走马灯 -->
    <el-carousel>

        <el-carousel-item v-for="item in ShoppingScrollItems">
            <!-- 滚动图片 -->
            <img :src="item.imgSrc" :alt="item.imgAlt" style="width: 100%" />
        </el-carousel-item>

    </el-carousel>
</template>

<style lang="scss" scoped>
:deep(.el-carousel__container) {
    height: 480px;
}
</style>