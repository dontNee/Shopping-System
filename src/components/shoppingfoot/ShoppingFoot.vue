<script setup lang="ts">
import { ref, onMounted } from "vue"
import Api from "../../api/index"

// 口号列表
const sloganList = ref([] as Array<any>);

// 帮助列表
const helpList = ref([] as Array<any>);

// 关于我们
const moreAboutList = ref([] as Array<any>);

// 声明
const description = ref("");

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
        // 口号列表
        sloganList.value = result.slogan;
        // 帮助列表
        helpList.value = result.morehelper;
        // 更多关于
        moreAboutList.value = result.moreabout;
        // 声明
        description.value = result.description;
    };
    Api.getShoppingFoot(params, callback);
}
</script>

<template>
    <div class="shopping-foot shopping-content-container">
        <div class="slogan-container">
            <ul>
                <li v-for="item in sloganList">
                    <h5 :class="['slogan-title', item.className]" :style="{ backgroundImage: `url(${item.backgroundImage})`}">{{ item.title }}</h5>
                    <span class="ellipsis-one-line">{{ item.name }}</span>
                </li>
            </ul>
        </div>

        <el-divider></el-divider>
        
        <div class="more-helper">
            <ul>
                <li v-for="item in helpList">
                    <h5>{{ item.title }}</h5>
                    <ul v-for="subItem in item.subItems">
                        <li>
                            <span>{{ subItem }}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <el-divider></el-divider>

        <div class="more-about">
            <ul>
                <li v-for="item in moreAboutList">
                    <span>{{ item }}</span>
                </li>
            </ul>
            <p class="description">{{ description }}</p>
        </div>

        <div class="beian_info">
            <ul>
                <li>
                    <a target="_blank" href="https://beian.miit.gov.cn/#/Integrated/index">
                        <span>备案号: 豫ICP备2023014596号-1</span>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41128202411413">
                        <img src="http://43.138.104.32:80/global-assets/img/vue/jd-shopping/beian_icon.png"/>
                        <span>豫公网安备 41128202411413号</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.shopping-foot {

    margin-bottom: 40px;
    margin-top: 20px;

    .slogan-container {

        ul {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            list-style: none;
            padding-inline-start: 0px;

            li {
                margin-top: 5px;
                display: inline-block;

                .slogan-title {
                    background-repeat: no-repeat;
                    display: inline-block;
                    text-align: center;
                    color: transparent;
                    width: 36px;
                    height: 42px;
                    line-height: 42px;
                    margin-right: 10px;

                    &.more {
                        background-position: 0 -192px;
                    }

                    &.quick {
                        background-position: -41px -192px;
                    }

                    &.good {
                        background-position: -82px -192px;
                    }

                    &.less {
                        background-position: -123px -192px;
                    }
                }
                
                span {
                    font-size: 18px;
                    font-weight: 700;
                    color: #444;
                }
            }
        }
    }

    .more-helper {

        > ul {
            list-style: none;
            padding-inline-start: 0px;
            display: flex;
            justify-content: space-around;

            li {

                h5 {
                    color: #666;
                    font-size: 14px;
                    font-weight: 700;
                }

                ul {
                    list-style: none;
                    padding-inline-start: 0px;

                    li {
                        max-width: 200px;

                        span {
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }

    .more-about {

        ul {
            text-align: center;
            list-style: none;

            li {
                display: inline-block;
                height: 12px;
                line-height: 12px;

                span {
                    display: inline-block;
                    padding: 0 7px;
                    font-size: 12px;
                }

                + li {

                    span {
                        border-left: 1px solid #ccc;
                    }
                }
            }
        }

        .description {
            text-align: center;
            font-size: 12px;
            color: #666;
            margin-top: 8px;
        }
    }

    .beian_info {
        color: #666;
        font-size: 13px;
        margin-top: 20px;

        ul {
            text-align: center;
            list-style: none;

            li {
                display: inline-block;
                height: 12px;
                line-height: 12px;
                margin: 0 8px;

                a {
                    display:inline-block;
                    text-decoration:none;
                
                    img {
                        vertical-align: text-top;
                        margin-right: 3px;
                    }
                }
            }
        }
    }

}
</style>