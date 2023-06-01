<script setup lang="ts">
import ShoppingList from '../components/shoppinglist/ShoppingList.vue'
import SpecailList from '../components/specaillist/SpecailList.vue'
import SeckillList from '../components/seckilllist/SeckillList.vue'
import ChannelDivider from '../components/ChannelDivider.vue'

import { onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex';

const store = useStore();

// 挂载函数
onMounted(() => {
    initData();
})

// 取消挂载函数
onUnmounted(() => {
    cleanData();
})

// 页面皮肤
const pageSkinClass: string = "skin-shopping-home";
// 初始化数据
function initData() {
    // 给body添加页面独有的类
    store.commit('addClassToBody', pageSkinClass);
}
// 清空数据
function cleanData() {
    // 从body移除页面的类
    store.commit('removeClassFromBody', pageSkinClass);
}
</script>

<template>
    <el-container class="shopping-home shopping-content-container">
        <el-main>
            <!-- 特殊展示 -->
            <specail-list></specail-list>
            <!-- 秒杀商品 -->
            <seckill-list></seckill-list>
            <!-- 分割符 -->
            <channel-divider></channel-divider>
            <!-- 商品列表 -->
            <shopping-list></shopping-list>
        </el-main>
    </el-container>
</template>

<style lang="scss" scoped>
.shopping-home {

}
</style>