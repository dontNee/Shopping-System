<script setup lang="ts">
import {ref, onMounted} from 'vue'
import Api from '../../../api/index'

// 查询表单
const searchFormConf = ref({} as any);

// 关键词列表
const keywordList = ref([] as Array<any>);

// 导航列表
const navitemList = ref([] as Array<any>);

// 挂载函数
onMounted(() => {
    initData();
})

// 初始化数据
function initData() {
    // 参数
    let params = {};
    // 回调函数
    let callback = (result: any) => {
        // 查询表单配置
        searchFormConf.value = result.searchForm;
        // 关键词列表
        keywordList.value = result.keywordList;
        // 导航词列表
        navitemList.value = result.navitemList;
    };
    Api.getSearchFormConfig(params, callback);
}
</script>

<template>
    <div class="search-form">
        <!-- 查询表单 -->
        <el-form :inline="true" class="form-search">
            <el-form-item class="input-search">
                <el-autocomplete>
                    <template #suffix>
                        <el-icon size="12px" color="red"><Search /></el-icon>
                    </template>
                </el-autocomplete>
            </el-form-item>
            <el-form-item>
                <el-button class="btn-shopping-cart">
                    <el-icon :size="16"><ShoppingCart /></el-icon>
                    <span>{{ searchFormConf.buttonName }}</span>
                    <i class="ci-count">{{ 0 }}</i>
                </el-button>
            </el-form-item>
        </el-form>
        <!-- 关键词列表 -->
        <div class="keyword-list">
            <ul>
                <li v-for="keyword in keywordList">
                    <span>{{ keyword }}</span>
                </li>
            </ul>
        </div>
        <!-- 导航词列表 -->
        <div class="navitem-list">
            <ul>
                <li v-for="navitem in navitemList" class="ellipsis-one-line">{{ navitem }}</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.search-form {

    height: 100%;
    position: relative;

    .form-search {
        width: 80%;
        margin: 0 auto;
        padding-top: 20px;

        .btn-shopping-cart {
            position: relative;
            font-size: 12px;
            color: #e1251b;
            border-radius: 0;
            // box-shadow: 0px 0px 0px 1px #eee;

            .input-search {
                white-space: nowrap;
            }

            span {
                margin-left: 15px;
            }

            .ci-count {
                position: absolute;
                padding: 1px 3px;
                top: -6px;
                left: 12px;
                color: #fff;
                background-color: #e1251b;
                border-radius: 7px;
                min-width: 15px;
                font-style: normal;
            }
        }

        :deep(.el-form-item) {
            margin-bottom: 0;
            margin-right: 12px;
        }

        :deep(.el-autocomplete) {
            max-width: 100%;
        }

        :deep(.el-input__wrapper) {
            border: 2px solid red;
            box-shadow: none;
            border-radius: 0;
        }
    }

    .keyword-list {
        width: 80%;
        margin: 0 auto;

        ul {
            white-space: nowrap;
            list-style: none;
            padding-inline-start: 0px;
            overflow: hidden;

            li {
                display: inline-block;
                margin-right: 10px;
                
                span {
                    font-size: 12px;
                    color: #999;
                }

                &:first-child {
                    color: red;
                }
            }
        }
    }

    .navitem-list {
        position: absolute;
        bottom: 0;
        width: 100%;

        ul {
            list-style: none;
            padding-inline-start: 0px;
            display: flex;
            justify-content: space-between;

            li {
                margin: 5px 11px;
            }
        }
    }
}
</style>