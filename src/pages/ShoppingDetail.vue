<script setup lang="ts">
import DetailBodys from '../components/detailbody/DetailBodys.vue'
import DetailHeader from '../components/detailheader/DetailHeader.vue'

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
const pageSkinClass: string = "skin-shopping-detail"
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
    <div class="shopping-detail">

        <detail-header></detail-header>

        <detail-bodys></detail-bodys>
    </div>
</template>

<style lang="scss" scoped>

</style>