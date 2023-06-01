<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Api from '../../api/index'

// 挂载函数
onMounted(() => {
    // 初始化数据
    initData();
})

// 获取特殊商品
const specailItems = ref([] as Array<any>);

// 初始化数据
function initData() {
    // 参数
    let params = {};
    // 回调函数
    let callback = (resultList: Array<any>) => {
        // 赋值给对应值
        specailItems.value = resultList;
    };
    Api.getSpecailItems(params, callback);
}

</script>

<template>

    <div class="specail-items">
        <img v-for="item in specailItems" :src="item.imgSrc" :alt="item.imgAlt" />
    </div>

</template>

<style lang="scss" scoped>
.specail-items {

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img {
        width: 190px;
        height: 150px;
    }

}
</style>