<script setup lang="ts">
// 定义可传递的props
const props = defineProps({
    title: {
        type: String,
        default() {
            return "频道广场"
        }
    }
});
</script>

<template>
    <div class="channel-divider">
        <h3 class="channel-divider-title">{{ title }}</h3>
    </div>
</template>

<style lang="scss" scoped>
.channel-divider {
    height: 45px;
    margin: 0 5px 7px;
    line-height: 45px;
    text-align: center;

    .channel-divider-title {
        position: relative;
        width: 200px;
        height: 45px;
        margin: 0 auto;
        font-size: 26px;
        font-weight: 700;
        padding: 0 30px;

        &::before,
        &::after {
            content: "";
            position: absolute;
            top: 50%;
            margin-top: -10px;
            background-image: url("http://43.138.104.32:80/global-assets/img/vue/jd-shopping/sprite.png");
            width: 25px;
            height: 20px;
        }

        &::before {
            background-position: 0 0;
            left: 0;
        }

        &::after {
            background-position: -25px 0;
            right: 0;
        }
    }
}
</style>