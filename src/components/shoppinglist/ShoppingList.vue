<script  setup lang="ts">
import ShoppingItem from './ShoppingItem.vue'
import { ref, onMounted } from 'vue'
import Api from '../../api/index';

// 生命周期挂载函数
onMounted(() => {
    initData();
});

// 列表
const shoppingList = ref([] as Array<any>);

function initData() {
    // 获取商品列表
    getShoppingList();
}

function getShoppingList() {
    // 参数
    let params = {};
    // 回调函数
    let callback = (resultList: Array<any>) => {
        // 赋值
        shoppingList.value = resultList;
    }
    Api.getShoppingList(params, callback)
}
</script>

<template>

    <ul class="shopping-list">
        <li v-for="item in shoppingList">
            <ShoppingItem :data="item" />
        </li>
    </ul>

</template>

<style lang="scss" scoped>
.shopping-list {

    display: flex;
    flex-wrap: wrap;
    padding-inline-start: 0;

    li {
        list-style: none;
        margin: 0 5px 10px;
        background-color: #fff;
        flex-grow: 1;
    }
}
</style>