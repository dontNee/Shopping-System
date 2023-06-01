<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import Api from '../../api/index'

onMounted(() => {
    initData();
})

// 表单信息
const shoppingForm = ref({} as any);
// 全国省市县
const chinaMap = ref([] as Array<any>);

// 初始化数据
function initData() {
    // 获取表单信息
    initShoppingForm();
    // 获取全国地址
    initChinaAddr();
}

// 初始化表单
function initShoppingForm() {
    // 参数
    let params = {};
    // 回调函数
    let callback = (result: any) => {
        shoppingForm.value = result;
    };
    Api.getShoppingForm(params, callback);
}

// 初始化全国省市县
function initChinaAddr() {
    // 参数
    let params = {};
    // 回调函数
    let callback = (result: Array<any>) => {
        chinaMap.value = result;
    };
    Api.getChinaAddrInfo(params, callback);
}

// 用户提交的表单模型
const formModel = reactive({
    // 加入购物车的数量
    addNum: 1
});
</script>

<template>
    <div class="shopping-form">
        <p class="shopping-name">{{ shoppingForm.shoppingName }}</p>
        <p class="shopping-note">{{ shoppingForm.shoppingNote }}</p>
        <p class="shopping-banner">
            <img :src="shoppingForm.shoppingBannerUrl"  />
        </p>
        <p class="shopping-form-container">
            <!-- 表单顶部灰色区域  -->
            <el-form :model="formModel" label-width="90px" label-position="left" class="shopping-summary">
                <el-form-item label="京 &ensp; 东 &ensp; 价">
                    <p class="p-price">
                        <span>
                            <i>￥</i>
                            <span class="price">{{ shoppingForm.shoppingSummary }}</span>
                        </span>
                        <span class="notice">降价通知</span>
                    </p>
                </el-form-item>
                <el-form-item label="优 &ensp; 惠 &ensp; 卷" >
                    <p class="p-coupons">
                        <span class="coupons">满200减15</span>
                    </p>
                </el-form-item>
                <el-form-item label="促 &emsp; &emsp; 销">
                    <p class="p-promotion">
                        <em class="red-bg">满额返券</em>
                    </p>
                </el-form-item>
                <el-form-item></el-form-item>
            </el-form>
            <!-- 用户提交的表单内容 -->
            <el-form label-width="90px" label-position="left" class="shopping-info">
                <el-form-item label="增 值 业 务">
                    <div class="support-plain">
                        <el-icon><Refresh /></el-icon>
                        <span>{{ shoppingForm.shoppingVas }}</span>
                    </div>
                </el-form-item>
                <el-form-item label="配 &ensp; 送 &ensp; 至">
                    <el-cascader :options="chinaMap" :props="{label: 'name', value: 'code'}" placeholder="请选择"></el-cascader>
                </el-form-item>
                <el-form-item label="重 &emsp; &emsp; 量">
                    <p>{{ shoppingForm.shoppingWeight }}</p>
                </el-form-item>
                <div>
                    <el-input-number v-model="formModel.addNum" controls-position="right" :min="1" style="width: 100px; border-radius: 0;"></el-input-number>
                    <el-button type="danger" class="to-shopping-cart" style="border-radius: 0;">加入购物车</el-button>
                </div>
            </el-form>
            <!-- 累计评价 -->
            <div class="comment-count">
                <p>累计评价</p>
                <p class="p-count">1万+</p>
            </div>
        </p>
    </div>
</template>

<style lang="scss" scoped>
.shopping-form {

    .shopping-name {
        font-weight: 700;
        color: #666;
        padding-top: 10px;
        margin-bottom: 5px;
    }

    .shopping-note {

        color: #e4393c;
        font-size: 12px;
        margin-bottom: 5px;
    }

    .shopping-banner {
        background-color: #f3f3f3;

        img {
            width: 100%;
            height: 32px;
        }
    }

    .shopping-form-container {
        position: relative;

        :deep(.el-form .el-form-item .el-form-item__content) {
            font-size: 12px;
            color: #999;
            
        }

        :deep(.el-form .el-form-item .el-form-item__label) {
            font-size: 12px;
            color: #999;
            padding-left: 10px;
            text-align: justify;
            text-align-last: justify;
        }

        .to-shopping-cart {
            margin-left: 5px;
        }

        .shopping-summary {
            background-color: #f3f3f3;

            .p-price {
                color: #e4393c;
                font-size: 16px;

                .price {
                    padding-right: 20px;
                    font-size: 22px;
                }


                .notice {
                    font-size: 12px;
                    color: #005aa0;
                }
            }

            .p-coupons {
                color: #df3033;
                font-size: 12px;

                span.coupons {
                    display: inline-block;
                    padding: 0 10px;
                    border: 1px solid #df3033;
                    background: #ffdedf;
                    line-height: 16px;
                }
            }

            .p-promotion {

                em {
                    font-style: normal;
                }

                .red-bg {
                    color: #df3033;
                    border: 1px solid #df3033;
                    padding: 2px 3px;
                    margin-right: 5px;
                    display: inline-block;
                    line-height: 16px;
                }
            }
        }

        .shopping-info {

            .support-plain {
                
                color: #666;
                border: 1px solid #666;
                line-height: 16px;
                border-radius: 5px;

                span {
                    padding: 0 5px;
                }
            }
        }

        .comment-count {
            position: absolute;
            top: 0.1rem;
            right: 10px;
            color: #999;
            font-size: 12px;
            padding: 0 10px;
            border-left: solid 1px #e6e6e6;

            .p-count {
                font-size: 14px;
                color: #005ea7;
            }
        }
    }
}
</style>