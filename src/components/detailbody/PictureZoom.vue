<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useMouse } from '../../assets/utils/mouse'
import Api from '../../api/index'

// 挂载函数
onMounted(() => {
    // 初始化数据
    initData();
})

// 图片列表
const pictureList = ref([] as Array<any>);
// 图片
const pictureInfo = ref({} as any);
// 偏移量
const { x, y, isMouseEnter } = useMouse("picture-container");

// 获取滑块x的偏移量
const trackerOffsetX = computed(() => {
    // 初始化结果
    let result: number = x.value - 125;
    // 是否大于最大偏移量
    if (x.value > 350 - 250 + 125) {
        // 设置滑块最大偏移
        return result = 100;
    }
    // 是否小于最小偏移量
    if (x.value < 125) {
        // 设置滑块最小偏移
        return result = 0;
    }
    return result;
})

// 获取滑块Y的偏移量
const trackerOffsetY = computed(() => {
    // 初始化结果
    let result: number = y.value - 125;
    // 是否大于最大偏移量
    if (y.value > 350 - 250 + 125) {
        // 设置滑块最大偏移
        return result = 100;
    }
    // 是否小于最小偏移量
    if (y.value < 125) {
        // 设置滑块最小偏移
        return result = 0;
    }
    return result;
})

// 初始化数据
function initData() {
    // 参数
    let params = {};
    // 回调函数
    let callback = (resultList: any) => {
        // 图片列表
        pictureList.value = resultList;
        // 切换图片
        changePicture();
    };
    Api.getPictureZoom(params, callback);
}

// 记录当前图片在图片列表的索引，默认为0
const pictureIndex = ref(0);

// 切换图片
function changePicture(index?: number) {
    // 获取正确索引
    pictureIndex.value = index === undefined ? 0 : index;
    // 获取图片
    pictureInfo.value = pictureList.value[pictureIndex.value];
}
</script>

<template>
    <div class="picture-zoom">
        
        <div id="picture-container" class="picture-container">
            <img v-show="pictureInfo.imgSrc" :src="pictureInfo.imgSrc"/>
        </div>

        <div v-show="isMouseEnter" class="picture-tracker" 
            :style="{ left: `${ trackerOffsetX }px`, top: `${ trackerOffsetY }px` }">
        </div>

        <div v-show="isMouseEnter" class="picture-preview">
            <img  v-show="pictureInfo.imgSrc" :src="pictureInfo.imgSrc"
                :style="{ right: `${ trackerOffsetX * 2 }px`, bottom: `${ trackerOffsetY * 2 }px` }"/>
        </div>

        <div class="zoom-bottom">
            <el-icon size="38" class="left-arrow">
                <ArrowLeft />
            </el-icon>
            <ul class="picture-ul">
                <li v-for="(item, index) in pictureList" :class="{'current': pictureIndex == index}"  @click="changePicture(index)" >
                    <img :src="item.imgSrc" />
                </li>
            </ul>
            <el-icon size="38" class="right-arrow">
                <ArrowRight />
            </el-icon>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$picture-container-size: 350px;
.picture-zoom {
    position: relative;

    .picture-container {
        width: $picture-container-size;
        height: $picture-container-size;
        border: 1px solid #eee;
        overflow: hidden;
        cursor: move;

        img {
            width: 100%;
        }
    }

    .picture-tracker {
        position: absolute;
        top: 0;
        left: 0;
        width: 250px;
        height: 250px;
        background-color: #fede4f;
        opacity: 0.5;
        pointer-events: none;
    }

    .picture-preview {
        position: absolute;
        top: 0;
        left: 360px;
        width: 500px;
        height: 500px;
        overflow: hidden;
        border: 1px solid #eee;
        z-index: 2;

        img {
            width: 700px;
        }
    }

    .zoom-bottom {
        width: $picture-container-size;
        padding-top: 5px;
        position: relative;

        .left-arrow {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
        }

        .right-arrow {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
        }

        .picture-ul {
            padding: 0 40px;
            list-style: none;

            li {
                display: inline-block;
                cursor: pointer;
                width: 50px;
                height: 50px;
                margin: 0 3px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .current {
                border: 2px solid #e53e41;
            }
        }
    }
}
</style>