<script  setup lang="ts">
import { ref, onMounted } from 'vue'
import { getCurrentTime } from '@/assets/utils/clock-time'
import Api from '../../api/index'

// 秒杀
const timecount = ref({} as any);
// 秒杀列表
const seckillList = ref([] as Array<any>);
// 品牌专栏
const seckillBrand = ref({} as any);
// 获取当前时间
const { hh , mm, ss} = getCurrentTime();

// 挂载函数
onMounted(() => {
    initData();
})

// 初始化函数
function initData() {
    // 参数
    let params = {};
    // 回调函数
    let callback = (result: any) => {
        // 秒杀信息
        timecount.value = result.timecount;
        // 秒杀列表
        seckillList.value = result.seckillList;
        // 秒杀品牌
        seckillBrand.value = result.seckillBrand;
    };
    Api.getSeckillList(params, callback);
}

</script>

<template>
    <div class="seckill-list">

        <div class="seckill-timecount" :style="{ backgroundImage: `url(${ timecount['backgroundImage'] })`}">
            <!-- 秒杀标题 -->
            <div class="seckill-title">
                <span>{{ timecount.title }}</span>
            </div>
            <!-- 秒杀时间 -->
            <div class="seckill-time">
                <p>
                    <span class="schedule-time">{{ timecount.scheduleTime }}</span>点场 距结束
                </p>
                <p>
                    <span class="span-clock-time time-hour">{{ hh }}</span>
                    <span class="span-clock-time time-minutes">{{ mm }}</span>
                    <span class="span-clock-time">{{ ss }}</span>
                </p>
            </div>
        </div>

        <div class="seckill-items-list">
            <el-button round class="seckill-list-control seckill-prev">{{ '<' }}</el-button>
            <div v-for="item in seckillList" class="seckill-items">
                <div class="seckill-item-image">
                    <img :src="item.imgSrc" width="100%" />
                </div>
                <div class="seckill-item-name">
                    <p class="ellipsis-one-line">{{ item.seckillItemName }}</p>
                </div>
                <div class="seckill-item-price">
                    <i>¥</i>
                    <span>{{ item.seckillItemPrice }}</span>
                </div>
            </div>
            <el-button round class="seckill-list-control seckill-next">{{ '>' }}</el-button>
        </div>

        <div class="seckill-brand">
            <div class="item-image">
                <img :src="seckillBrand.imgSrc" width="100%" />
            </div>
            <div class="item-info">
                <p class="item-info-title">{{ seckillBrand.itemInfoTitle }}</p>
                <p class="item-info-promo">{{ seckillBrand.itemInfoPromo }}</p>
                <p class="item-info-action">
                    <el-button size="small" round>{{ seckillBrand.itemInfoAction }}</el-button>
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.seckill-list {

    height: 260px;
    background-color: #fff;
    margin: 0 5px 30px;
    display: flex;

    .seckill-timecount {
        width: 190px;
        color: #fff;
        flex-shrink: 0;
        position: relative;

        .seckill-title {
            height: 80px;
            line-height: 80px;
            text-align: center;
            font-size: 30px;

            span {
                font-weight: bold;
            }
        }

        .seckill-time {
            width: 100%;
            height: 66px;
            position: absolute;
            bottom: 20px;
            text-align: center;

            p + p {
                margin-top: 5px;
            }

            .schedule-time {
                font-size: 20px;
                font-weight: 700;
                padding-right: 2px;
            }

            .span-clock-time {
                display: inline-block;
                width: 30px;
                height: 30px;
                background-color: #2f3430;
                font-weight: bold;

                &.time-hour, &.time-minutes {
                    margin-right: 20px;

                    &::after {
                        content: ":";
                        display: inline-block;
                        width: 20px;
                        height: 100%;
                        font-weight: bold;
                        position: absolute;
                        right: -20px;
                    }
                }
            }
        }
    }

    .seckill-items-list {
        position: relative;
        height: 100%;
        flex-grow: 1;
        flex-shrink: 1;
        overflow: hidden;
        white-space: nowrap;

        .seckill-items {
            height: 100%;
            width: 25%;
            min-width: 190px;
            font-size: 12px;
            display: inline-block;
            border-right-width: 1px;
            border-right-style: solid;
            border-image: linear-gradient(0deg, #fff, #ccc, #fff) 1;

            .seckill-item-image {
                width: 140px;
                height: 140px;
                margin: 30px auto 0;

                img {
                    width: 100%;
                }
            }

            .seckill-item-name {
                margin: 13px 20px 0;
            }

            .seckill-item-price {
                color: #e1251b;
                margin: 7px auto 0;
                text-align: center;

                * {
                    font-weight: bold;
                }
            }
        }

        .seckill-list-control {
            position: absolute;
            top: 50%;
            z-index: 2;
            transform: translateY(-50%);
            font-weight: 900;
            color: rgba(255,255,255,0.8);
            background-color: #d9d9d9;
        }

        .seckill-prev {
            left: -12px;
        }
        .seckill-next {
            right: -12px;
        }
    }

    .seckill-brand {
        width: 190px;
        padding: 10px;
        flex-shrink: 0;

        .item-image {
            width: 120px;
            height: 120px;
            margin: 20px auto 0;

            img {
                width: 100%;
            }
        }

        .item-info {
            height: calc(100% - 150px);
            margin-top: 10px;
            text-align: center;
            background: linear-gradient(180deg,rgba(255,255,255,.5),rgba(220,224,236,.5));

            .item-info-title {
                font-size: 14px;
            }

            .item-info-promo {
                color: #333;
                font-weight: bold;
            }

            .item-info-action {

                margin-top: 5px;

                :deep(.el-button) {
                    color: #e1251b;
                    border: 1px solid #e1251b;
                }
            }
        }
    }
}
</style>