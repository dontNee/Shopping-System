<script setup lang="ts">
import HeaderNav from './HeaderNav.vue'
import HeadForm from './headerform/HeadForm.vue'
</script>

<template>
    <div class="shopping-head">
        <el-container class="shopping-content-container">
            <el-header height="auto">
                <!-- 导航条 -->
                <header-nav></header-nav>
            </el-header>
        </el-container>
        <div class="header-form-container">
            <!-- 头部搜索表单 -->
            <head-form></head-form>
        </div>
        <div id="anchor-point"></div> 
    </div>
</template>

<style lang="scss" scoped>
.shopping-head {
    width: 100%;
    .header-form-container {
        background-color: #fff;
    }
}
</style>