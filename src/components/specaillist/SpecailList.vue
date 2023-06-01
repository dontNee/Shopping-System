<script setup lang="ts">
import ShoppingCotegories from './ShoppingCotegories.vue'
import ShoppingScroll from './ShoppingScroll.vue'
import SpecailItems from './SpecailItems.vue'
import ShoppingNews from './ShoppingNews.vue'
</script>

<template>

    <div class="specail-list">

        <!-- 商品分类 -->
        <div class="div-shopping-cotegories">
            <shopping-cotegories></shopping-cotegories>
        </div>

        <!-- 大屏轮播 -->
        <div class="div-shopping-scroll">
            <shopping-scroll></shopping-scroll>
        </div>

        <!-- 特殊商品 -->
        <div class="div-specail-items">
            <specail-items></specail-items>
        </div>

        <!-- 新闻 -->
        <div class="div-shopping-news">
            <shopping-news></shopping-news>
        </div>

    </div>

</template>

<style lang="scss" scoped>
.specail-list {

    display: flex;
    height: 480px;
    background-color: #f4f4f4;
    margin: 0 5px 30px;
    overflow-y: hidden;
    overflow-x: auto;

    > div {
        flex-grow: 1;
        flex-shrink: 0;
        background-color: #fefefe;

        + div {
            margin-left: 10px;
        }
    }

    .div-shopping-cotegories {
        width: 190px;
    }

    .div-shopping-scroll {

        width: 590px;
    }

    .div-specail-items {
        margin-left: 0;
        padding-left: 8px;
        width: 190px;
    }

    .div-shopping-news {
        width: 190px;
    }

}
</style>