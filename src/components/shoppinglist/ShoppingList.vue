<script  setup lang="ts">
import ShoppingItem from './ShoppingItem.vue'
import { ref, onMounted, inject } from 'vue'
import Api from '../../api/index';

// 生命周期挂载函数
onMounted(() => {
    initData();
});
// 初始化数据
function initData() {
    // 获取商品列表
    getShoppingList();
}
// 获取通用配置
const common: any = inject("common");
// 列表
const shoppingList = ref([] as Array<any>);
// 获取商品列表
function getShoppingList() {
    // 参数
    let params = {};
    // 回调函数
    let callback = (result: any) => {
        // 成功
        if (result.statusCode == common.SUCCESS_CODE) {
            // 获取响应结果
            const resultList = result.responseVo;
            // 修改数据格式
            shoppingList.value = resultList.map((item: any) => {
                // 返回
                return {
                    itemImageUrl: item.goodImgUrl,
                    itemInfo: item.goodDesc,
                    userId: item.goodOwnerId,
                    itemName: item.goodName,
                    itemType: item.goodType
                }
            })
        }
        // 失败
        if (result.statusCode != common.SUCCESS_CODE) {
            // 清空数据
            shoppingList.value = [];
        }
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