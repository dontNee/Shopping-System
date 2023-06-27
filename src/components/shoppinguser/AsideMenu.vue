<script lang="ts" setup>
import Api from "../../api/index";
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// 挂载函数
onMounted(() => {
    // 初始化侧边栏数据
    initAsideMenu();
});
// 定义响应式变量
const asideMenuList = ref([] as Array<any>);
// 初始化侧边栏数据
function initAsideMenu() {
    // 参数
    let params = {};
    // 回调函数
    let callback = (result: any) => {
        // 初始化侧边栏数据
        asideMenuList.value = result;
    };
    // Api
    Api.getAsideMenu(params, callback);
};

// 路由对象
const router = useRouter();
// 路由
const route = useRoute();
// 触发事件
const emit = defineEmits(['routerChange'])
// 处理侧边栏点击
function handleAsideMenuClick(subItem: any) {
    // 获取点击事件处理函数
    if (subItem && subItem.route) {
        // 反射
        router.push(subItem.route);
    }
    emit('routerChange', subItem.title)
}

// 当前路由
const currentRoute = computed(() => {
    // 返回
    return route.fullPath;
});
</script>

<template>

    <ul class="aside-menu">
        <li v-for="item in asideMenuList" class="item">
            
            <h4>{{ item.title }}</h4>

            <ul class="subitems">
                <li v-for="subItem in item.items" :class="{active: currentRoute == subItem.route}">
                    <span @click="handleAsideMenuClick(subItem)">{{ subItem.title }}</span>
                </li>
            </ul>

        </li>
    </ul>

</template>

<style lang="scss" scoped>
.aside-menu {
    list-style: none;
    padding-inline-start: 50%;

    li {
        font-size: 12px;

        h4 {
            font-size: 13px;
            font-weight: 700;
            margin: 5px 0 10px;
        }

        span {
            cursor: pointer;

            &:hover {
                color: #e4393c;
                text-decoration: underline;
            }
        }

        &.active {

            span {
                color: #e4393c;
            }
        }
    }

    .subitems {
        list-style: none;
        padding-inline-start: 0;

        li {
            margin: 5px 0;
        }
    }
}
</style>