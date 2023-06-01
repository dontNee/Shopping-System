<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import UserItems from '../../model/UserItems';
// 属性
const props = defineProps({
    // 显示数据
    data: {
        type: Object,
        default() {
            return {}
        }
    }
});
// 挂载函数
onMounted(() => {
    initData();
})
// 商品对象
const shoppingItem = ref(new UserItems())
// 初始化数据
function initData() {
    // 初始化商品对象
    shoppingItem.value.initData(props.data);
}
// 格式化价格
function formatPrice(num: any) {
    try {
        // 返回两位小数
        return Number(num).toFixed(2);
    } catch(err) {
        // 返回0
        return Number(0).toFixed(2);
    }
}

const router = useRouter();
// 处理商品点击事件
function handleShoppingItemClick() {
    // 导航
    router.push('/shopping-detail');
}
</script>

<template>
    <div class="shopping-item" @click="handleShoppingItemClick">

        <div class="item-pic">
            <img :src="shoppingItem.itemImageUrl" :alt="shoppingItem.itemInfo" />
        </div>

        <div class="item-info">
            <p class="ellipsis-two-line">{{ shoppingItem.itemInfo }}</p>
        </div>

        <div class="item-price">
            <i class="currency-type">¥</i>
            <span>{{  formatPrice(shoppingItem.itemPrice) }}</span>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.shopping-item {

    width: 230px;
    height: 322px;
    font-size: 12px;
    margin: 0 auto;

    .item-pic {
        text-align: center;

        img {
            width: 150px;
            height: 150px;
            margin: 30px auto;
            display: inline-block;
        }
    }

    .item-info {
        padding: 0 20px;

    }

    .item-price {
        padding: 10px 20px;
        color: #e1251b;
        font-size: 16px;
        font-weight: 700;

        .currency-type {
            margin-right: 3px;
        }
    }
}
</style>