<script setup lang="ts">
import { ref, onMounted, reactive, computed } from 'vue'
import Api from '../../api/index'

// 图片列表
const pictureList = ref([] as any[]);

// 挂载函数
onMounted(() => {
    initData();
})

// 单位高度
const itemHeight: number = 188;
// 总体高度
let totalHeight: number = 0;

function initData() {
    // 参数
    let params = {};
    // 回调函数
    let callback = (resultList: any[]) => {
        // 图片列表
        pictureList.value = resultList;
        // 图片总高度
        totalHeight = pictureList == null ? 0 : pictureList.value.length * itemHeight;
    };
    // Api
    Api.getPictureScrollList(params, callback)
}

// 滚动距离
const rectTop = ref(0);

// 向上滚动
function up() {
    // 计算结果
    let result = rectTop.value - 2 * itemHeight;
    // 不应该小于最小值
    if (result < 2 * itemHeight - totalHeight) {
        result = 0;
    }
    rectTop.value = result;
}
// 向下滚动
function down() {
    // 计算结果
    let result = rectTop.value + 2 * itemHeight;
    // 初始值为0，不应该比0更大
    if (result > 0) {
        result = 2 * itemHeight - totalHeight;
    }
    rectTop.value = result;
}

// 添加计算属性
const ulistStyle = computed(() => {
    return {
        top: `${rectTop.value}px`
    }
});
</script>

<template>
    <div class="picture-scroll">
        <div class="picture-container">
            <ul :style="ulistStyle">
                <li v-for="item in pictureList">
                    <img :src="item.imgSrc"/>
                </li>
            </ul>
        </div>
        <div class="track-more">
            <el-icon :size="35" @click="up">
                <ArrowUp />
            </el-icon>
            <el-icon :size="35" @click="down">
                <ArrowDown />
            </el-icon>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$item-height: 188px;
.picture-scroll {
    .picture-container {
        width: 160px;
        height: 2 * $item-height;
        margin: 0 auto;
        overflow: hidden;
        position: relative;

        ul {
            position: absolute;
            padding-inline-start: 0;
            list-style: none;
            transition-duration: 1s;

            li {
                height: $item-height;
                padding: 10px 0;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    .track-more {
        text-align: center;
        color: #666;

        :deep(.el-icon) {
            margin: 0 5px;
            cursor: pointer;
        }
    }
}
</style>