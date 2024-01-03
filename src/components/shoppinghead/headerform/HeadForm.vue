<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Api from "../../../api/index"
import SearchForm from './SearchForm.vue';

// 挂载函数
onMounted(() => {
    initData();
})

// 商城Logo配置
const shoppingLogo = ref({} as any);
// 商城treasure配置
const shoppingTreasure = ref({} as any);

// 初始化数据
function initData() {
    // 参数
    let params = {};
    // 回调函数
    let callback = (result: any) => {
        // 商城Logo
        shoppingLogo.value = result.shoppingLogo;
        // 商城Treasure
        shoppingTreasure.value = result.shoppingTreasure;
    };
    Api.getHeaderFormConfig(params, callback);
}

</script>

<template>
    <div class="header-form shopping-content-container">
        <!-- 商城logo -->
        <div class="shopping-logo">
            <img class="inline-vertical-middle" :src="shoppingLogo.imgSrc" />
        </div>
        <!-- 头部查询表单 -->
        <div class="shopping-search">
            <search-form></search-form>
        </div>
        <!-- 其他图片 -->
        <div class="shopping-treasure">
            <img class="inline-vertical-middle" :src="shoppingTreasure.imgSrc" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header-form {
    height: 140px;

    > div {
        vertical-align: middle;
        height: 100%;
        display: inline-block;
    }

    .shopping-logo {
        width: 190px;

        img {
            width: 190px;
            height: 120px;
        }
    }

    .shopping-search {
        width: calc(100% - 380px);
    }

    .shopping-treasure {
        width: 190px;
        
        img {
            width: 100%;
        }
    }
}
</style>