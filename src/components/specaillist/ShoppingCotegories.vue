<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Api from '../../api/index';

// 挂载函数
onMounted(() => {
    initData();
})

const shoppingCotegoryList = ref([] as Array<any>);
// 初始化数据
function initData() {
    // 参数
    let params = {};
    // 回调函数
    let callback = (resultList: Array<any>) => {
        // 商品分类列表
        shoppingCotegoryList.value = resultList;
    };
    Api.getShoppingCotegories(params, callback)
}

</script>

<template>

    <ul class="shopping-categories">
        <li v-for="shoppingCotegory in shoppingCotegoryList">
            
            <!-- 面包屑组件 -->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in shoppingCotegory">
                    {{ item }}
                </el-breadcrumb-item>
            </el-breadcrumb>

        </li>
    </ul>

</template>

<style lang="scss" scoped>
.shopping-categories {

    padding-inline-start: 0;
    height: 100%;
    padding: 10px 0;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    li {
        list-style: none;
        padding: 5px 0px 5px 18px;

        :deep(.el-breadcrumb__separator) {
            padding: 0 2px;
            margin: 0;
        }

        &:hover {
            background-color: #d9d9d9;
        }
    }
}
</style>